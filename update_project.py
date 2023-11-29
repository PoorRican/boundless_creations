#!/usr/bin/python3
""" This is a tool to update Markdown data stored in JSON assets.

At the moment, functionality is limited to updating project descriptions.

# Usage

Supply the project name as the first and only argument to the command.

Nvim is the default program for editing files.
"""

import json
from enum import IntEnum
from os.path import join
import string, subprocess, random
from typing import Optional

from pydantic import BaseModel


class Link(BaseModel):
    name: str
    url: str


class Status(IntEnum):
    """ Represents the status of a project

    Corresponds to the enum defined in `src/components/StatusBadge.tsx`
    """
    IN_PROGRESS = 0
    AS_IS = 1
    ACTIVE = 2


class Project(BaseModel):
    """ Represents a project

    This is used for parsing and writing to the "projects.json" file
    """
    id: str
    title: str
    summary: str
    description: Optional[str] = None
    tags: Optional[list[str]] = None
    status: Status
    links: list[Link]
    image: Optional[str] = None


def load_all_projects(fn: str) -> list[Project]:
    """ Loads all projects from JSON

    Arguments
    =========
    fn: path to json file

    Returns
    =======
    list[Project]: list of projects
    """
    with open(fn, 'r') as f:
        projects = json.load(f)
    return [Project(**p) for p in projects]


def save_all_projects(projects: list[Project], fn: str):
    """ Saves all projects to JSON

    Arguments
    =========
    projects: list of projects
    fn: path to json file
    """
    with open(fn, 'w') as f:
        json.dump([p.model_dump_json() for p in projects], f, indent=2)


def get_project(k: str, fn: str) -> Project:
    """ Fetches project from JSON

    Arguments
    =========
    k: project id
    fn: path to json file

    Returns
    =======
    dict: project as dict
    """
    projects = load_all_projects(fn)
    for p in projects:
        if p.id == k:
            return p
    print(f'{k} does not exist in {fn}')


def update_field(k: str, attr: str, val: str, fn: str):
    """ Updates a field in a project

    Parameters
    ----------
    k: project id
    attr: attribute to update
    val: new value
    fn: path to json file
    """
    projects = load_all_projects(fn)
    for p in projects:
        if p.id == k:
            setattr(p, attr, val)
    save_all_projects(projects, fn)


def edit_markdown(text: str) -> str:
    """ Edits Markdown text using neovim.

    The given text is written to a temporary file, which is then opened in
    neovim. The user can edit the text in neovim, and the updated text is
    returned.

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
    subprocess.run(['nvim', path])

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

    description = edit_markdown(description)
    update_field(key, attribute, description, file)
