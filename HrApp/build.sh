#!/bin/bash
# Project-level dependencies
if [ ! -d "venv" ]; then
    echo -e '\033[0;31m' Creating Virtual Environment '\033[0m'
    python3.8 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt