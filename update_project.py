#!/usr/bin/python3
""" This is a tool to update Markdown data stored in JSON assets.

At the moment, functionality is limited to updating project descriptions.

# Usage

Supply the project name as the first and only argument to the command.

Nvim is the default program for editing files.
"""

import json
from os.path import join
import string, subprocess, random


def get_project(k: str, fn: str) -> dict:
    """ Fetches project from JSON

    Arguments
    =========
    k: project id
    fn: path to json file

    Returns
    =======
    dict: project as dict
    """
    with open(fn, 'r') as f:
        projects = json.load(f)
        for p in projects:
            if p['id'] == k:
                return p
    print(f'{k} does not exist in {fn}')

def update_field(k: str, attr: str, val: str, fn: str):
    with open(fn, 'r') as f:
        projects = json.load(f)
    for p in projects:
        if p['id'] == k:
            p[attr] = val
    with open(fn, 'w') as f:
        json.dump(projects, f, indent=2)

def edit_tmp(text: str) -> str:
    """ Edits Markdown text using neovim

    Arguments
    =========
    text: text to edit

    Returns
    =======
    str: edited text
    """
    # create temp file
    fn = ''.join(random.choice(string.ascii_lowercase) for _ in range(4)) + '.md'
    path = join('/tmp', fn)
    with open(path, 'w') as f:
        f.write(text)

    # edit temp file
    val = subprocess.run(['nvim', path])
    print(val)

    # read edited file
    with open(path, 'r') as f:
        return f.read()

if __name__ == "__main__":
    import sys
    file = "src/assets/projects.json"

    key = sys.argv[1]
    if key is None:
        print("Project must be passed as argument")
        exit(1)

    attribute = 'description'
    project = get_project(key, file)
    print(project)
    try:
        description = project[attribute]
    except KeyError:
        description = ''

    description = edit_tmp(description)
    update_field(key, attribute, description, file)