# -*- coding: utf-8 -*-
"""
Onyx Project
http://onyxproject.fr
Software under licence Creative Commons 3.0 France
http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
You may not use this software for commercial purposes.
@author :: Cassim Khouani
"""
from onyx.api.geolocalisation import *
import json
import pytest

geoloc = Geolocalisation()

class Test_Geolocalisation:

    def test_get_geolocalisation(self):
        result = json.loads(geoloc.get())

        assert result["status"] == "success"
