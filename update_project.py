#!/usr/bin/python3
""" This is a tool to update Markdown data stored in JSON assets.

At the moment, functionality is limited to updating project descriptions.

# Usage

Supply the project name as the first and only argument to the command.

Nvim is the default program for editing files.
"""

import json
from enum import IntEnum
from typing import Optional, ClassVar

from pydantic import BaseModel

from utils import edit_markdown, edit_list


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
        raise KeyError(f'{k} does not exist in {self.FILENAME}')

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

    def new_project(self):
        """ Creates a new project via user input

        Data is automatically saved to JSON after editing.
        """
        # prompt user for project id
        _id = input("Project ID: ")

        # check if project id already exists
        try:
            self.get_project(_id)
            print(f'Project with id {_id} already exists')
            return
        except KeyError:
            pass

        # prompt user for project title
        title = input("Project Title: ")

        # prompt user for project summary
        summary = input("Project Summary: ")

        # prompt user for project description
        _ = input("Press any key to enter description...")
        description = edit_markdown()

        # prompt user for project tags
        _ = input("Press any key to enter tags...")
        tags = edit_list([])

        # prompt user for project status
        status = input("Project Status ('in progress', 'as is', 'active'): ").lower()
        if status == 'in progress':
            status = Status.IN_PROGRESS
        elif status == 'as is':
            status = Status.AS_IS
        elif status == 'active':
            status = Status.ACTIVE

        # prompt user for project links
        gh_link = input("GitHub Link: ")
        links = [Link(name='GitHub', url=gh_link)]

        # prompt user for project photo
        photo = input("Photo: ")

        project = Project(
            id=_id,
            title=title,
            summary=summary,
            description=description,
            status=status,
            links=links,
            photo=photo,
            tags=tags
        )
        self.projects.append(project)
        self.save_all()


if __name__ == "__main__":
    from sys import argv, exit

    manager = ProjectManager()

    mode = argv[1]
    if mode == 'new':
        manager.new_project()
        print('New project created!')
        exit(0)
    elif mode == 'list':
        manager.list_projects()
        exit(0)
    elif mode == 'edit':
        attr = argv[2]
        if attr not in ('description', 'summary'):
            print(f"Invalid attribute {attr}. Must be ('description', 'summary')")
            exit(1)

        project_id = argv[3]
        if project_id is None:
            print("Project must be passed as argument")
            exit(1)

        if attr == 'description':
            manager.edit_description(project_id)
        elif attr == 'summary':
            manager.edit_summary(project_id)
