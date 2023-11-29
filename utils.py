import random
import string
import subprocess
import tempfile
from os.path import join
from typing import Optional


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


def edit_list(items: Optional[list[str]] = None) -> list[str]:
    """ Edits a list of strings using neovim.

    The given list is written to a temporary file, which is then opened in
    neovim. The user can edit the list in neovim, and the updated list is
    returned.

    Arguments
    =========
    items: list of strings to edit

    Returns
    =======
    list[str]: edited list
    """
    if items is None:
        items = []

    # create temp file
    fn = ''.join(random.choice(string.ascii_lowercase) for _ in range(4)) + '.md'
    tmp_dir = tempfile.gettempdir()
    path = join(tmp_dir, fn)
    with open(path, 'w') as f:
        f.write('\n'.join(items))

    # edit temp file
    subprocess.run(['nvim', path])

    # read edited file
    with open(path, 'r') as f:
        return f.read().strip().split('\n')
