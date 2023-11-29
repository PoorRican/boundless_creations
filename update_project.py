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
import tempfile
from typing import Optional, ClassVar

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
    description: str = ''
    tags: Optional[list[str]] = None
    status: Status
    links: list[Link]
    photo: str = ''

    def edit_description(self):
        self.description = edit_markdown(self.description)

    def edit_summary(self):
        self.summary = edit_markdown(self.summary)


class ProjectManager(object):
    """ Wrapper for managing projects

    Contains methods for loading, saving, and updating projects.
    """
    FILENAME: ClassVar[str] = "src/assets/projects.json"
    projects: list[Project]

    def __init__(self, fn: str = FILENAME):
        self.load_all(fn)

    def load_all(self, fn: Optional[str] = FILENAME):
        """ Loads all projects from JSON

        Arguments
        =========
        fn: path to json file
        """
        with open(fn, 'r') as f:
            projects = json.load(f)
        self.projects = [Project(**p) for p in projects]

    def save_all(self, fn: Optional[str] = FILENAME):
        """ Saves all projects to JSON

        Arguments
        =========
        fn: path to json file
        """
        with open(fn, 'w') as f:
            json.dump([p.model_dump() for p in self.projects], f, indent=2)

    def list_projects(self):
        """ Prints a list of all projects """
        for p in self.projects:
            print(p.id)

    def get_project(self, k: str) -> Project:
        """ Fetches project from JSON

        Arguments
        =========
        k: project id

        Returns
        =======
        dict: project as dict
        """
        for p in self.projects:
            if p.id == k:
                return p
        print(f'{k} does not exist in {self.FILENAME}')
        print('Available projects:')
        self.list_projects()

    def edit_description(self, k: str):
        """ Edits the description of a project as markdown

        Data is automatically saved to JSON after editing.

        Arguments
        =========
        k: project id
        """
        project = self.get_project(k)
        project.edit_description()
        self.save_all()

    def edit_summary(self, k: str):
        """ Edits the summary of a project as markdown

        Data is automatically saved to JSON after editing.

        Arguments
        =========
        k: project id
        """
        project = self.get_project(k)
        project.edit_summary()
        self.save_all()


def edit_markdown(text: Optional[str] = '') -> str:
    """ Edits Markdown text using neovim.

    The given text is written to a temporary file, which is then opened in
    neovim. The user can edit the text in neovim, and the updated text is
    returned.

    Arguments
    =========
    text: text to edit. If None, an empty string is used.

    Returns
    =======
    str: edited text
    """
    # create temp file
    fn = ''.join(random.choice(string.ascii_lowercase) for _ in range(4)) + '.md'
    tmp_dir = tempfile.gettempdir()
    path = join(tmp_dir, fn)
    with open(path, 'w') as f:
        f.write(text)

    # edit temp file
    subprocess.run(['nvim', path])

    # read edited file
    with open(path, 'r') as f:
        return f.read().strip()


if __name__ == "__main__":
    import sys

    key = sys.argv[1]
    if key is None:
        print("Project must be passed as argument")
        exit(1)

    manager = ProjectManager()

    manager.edit_summary(key)
