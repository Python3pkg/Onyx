#!/usr/bin/env bash

set -Ee

if [ $(id -u) -eq 0 ]; then
  echo "This script should not be run as root or with sudo."
  exit 1
fi

TOP=$(cd $(dirname $0) && pwd -L)

if [ -z "$WORKON_HOME" ]; then
    VIRTUALENV_ROOT=${VIRTUALENV_ROOT:-"${HOME}/.virtualenvs/onyx"}
else
    VIRTUALENV_ROOT="$WORKON_HOME/onyx"
fi

if [ ! -d ${VIRTUALENV_ROOT} ]; then
   mkdir -p $(dirname ${VIRTUALENV_ROOT})
  virtualenv -p python2.7 ${VIRTUALENV_ROOT}
fi
source ${VIRTUALENV_ROOT}/bin/activate
cd ${TOP}

pip install --upgrade virtualenv
pip install -r requirements.txt

cd ${TOP}/scripts/snowboy/swig/python/
make
