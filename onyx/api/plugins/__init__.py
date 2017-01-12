# -*- coding: utf-8 -*-
"""
Onyx Project
http://onyxproject.fr
Software under licence Creative Commons 3.0 France
http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
You may not use this software for commercial purposes.
@author :: Cassim Khouani
"""

from git import Repo
from onyx.api.assets import Json
from onyx.api.exceptions import *
from flask import g
from onyx.api.navbar import *
import importlib
import onyx, pip, os, git, shutil
import logging

logger = logging.getLogger()
json = Json()

class Plugin:

    def __init__(self):
        self.name = None
        self.url = None

    def get(self):
        try:
            plugins = [d for d in os.listdir(onyx.__path__[0] + "/plugins/") if os.path.isdir(os.path.join(onyx.__path__[0] + "/plugins/", d))]
            plug = []
            for plugin in plugins:
                json.path = onyx.__path__[0] + "/plugins/"+plugin+"/package.json"
                data = json.decode_path()
                e = {}
                e['name'] = data['name']
                e['raw'] = data['raw']
                e['desc'] = data['description']
                e['version'] = data['version']
                try:
                    e['index'] = data['index']
                except KeyError:
                    print('No view for ' + data['name'])

                    plug.append(e)
            return json.encode(plug)
        except Exception as e:
            raise PluginException(str(e))
            return json.encode({"status":"error"})

    def get_list(self):
        try:
            try:
                json.url = 'http://onyxproject.fr/'+g.lang+'/plugin_json'
                lists = json.decode_url()
            except:
                json.url = 'http://onyxproject.fr/fr/plugin_json'
                lists = json.decode_url()

            return json.encode(lists)
        except Exception as e:
            raise PluginException(str(e))
            return json.encode({"status":"error"})

    def install(self):
        try:
            Repo.clone_from(self.url, onyx.__path__[0] + "/plugins/" + self.name)
            json.path = onyx.__path__[0] + "/plugins/"+self.name+"/package.json"
            data = json.decode_path()
            self.install_dep()
            self.install_pip()
            if data['navbar'] == 'True':
                set_plugin_navbar(self.name)
            logger.info('Installation done with success')
            return json.encode({"status":"success"})
        except Exception as e:
            logger.error('Installation error : ' + str(e))
            raise PluginException(str(e))
            return json.encode({"status":"error"})

    def update(self):
        try:
            repo = git.cmd.Git(onyx.__path__[0] + "/plugins/" + self.name)
            repo.pull()
            self.install_dep()
            self.install_pip()
            logger.info('Update done with success')
            return json.encode({"status":"success"})
        except Exception as e:
            logger.error('update error : ' + str(e))
            raise PluginException(str(e))
            return json.encode({"status":"error"})


    def install_dep(self):
      logger.info('Install dependencies for : ' + self.name)
      json.path = onyx.__path__[0] + "/plugins/"+self.name+"/package.json"
      data = json.decode_path()
      deps = data["dependencies"]
      os.system('apt-get update --assume-yes')
      for dep in deps:
        os.system('apt-get install --assume-yes '+dep)


    def install_pip(self):
      logger.info('Install pip dependencies for : ' + self.name)
      json.path = onyx.__path__[0] + "/plugins/"+self.name+"/package.json"
      data = json.decode_path()
      deps = data["packages"]
      for dep in deps:
        pip.main(['install', dep])

    def uninstall(self):
        try:
            json.path = onyx.__path__[0] + "/plugins/"+self.name+"/package.json"
            data = json.decode_path()
            if data['navbar'] == 'True':
                delete_plugin_navbar(self.name)
            plugin = importlib.import_module('onyx.plugins.'+self.name)
            plugin.uninstall()
            shutil.rmtree(onyx.__path__[0] + "/plugins/" + self.name)
            logger.info('Uninstall done')
            return json.encode({"status":"success"})
        except Exception as e:
            logger.error('Uninstall error : ' + str(e))
            raise PluginException(str(e))
            return json.encode({"status":"error"})
