import json

from utils import edit_markdown

BLURBS = {
    'home':
        {
            'intro': 'src/pages/home/components/intro_blurb.json',
        }
}


def edit_blurb(page: str, label: str):
    if page not in BLURBS.keys():
        raise ValueError(f'Invalid page: {page}')

    if label not in BLURBS[page].keys():
        raise ValueError(f'Invalid label: {label}')

    path = BLURBS[page][label]
    with open(path, 'r') as f:
        text = f.read()
        text = json.loads(text)
    updated = edit_markdown(text)
    with open(path, 'w') as f:
        json.dump(updated, f, indent=2)


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()

    parser.add_argument('page', type=str,
                        help='page to edit')
    parser.add_argument('label', type=str,
                        help='label to edit')

    args = parser.parse_args()
    edit_blurb(args.page, args.label)
