#!/bin/bash

PYTHON=/home/gian/Projects/python_pocs/graalpy/.venv/bin/python
PYTHON_PIP=/home/gian/Projects/python_pocs/graalpy/.venv/bin/pip

GRAALPY=/home/gian/Projects/python_pocs/graalpy/.graalpy_venv/bin/python
GRAALPY_PIP=/home/gian/Projects/python_pocs/graalpy/.graalpy_venv/bin/pip

$PYTHON --version
$PYTHON_PIP --version
$GRAALPY --version
$GRAALPY_PIP --version

#time $PYTHON_PIP install -r requirements.txt
#time $GRAALPY_PIP install -r requirements.txt
#$PYTHON_PIP install -U setuptools
$GRAALPY_PIP install -U setuptools

#$PYTHON -m pyperf system tune
$GRAALPY -m pyperf system tune

#$PYTHON -m pyperformance compile 
#$PYTHON -m pyperformance run -o python.json
$GRAALPY -m pyperformance run -o graalpy.json
