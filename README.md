# cookiecutter-typescript

## Features

`Typescript`, `Prettier`, `ESLint`, `Mocha`

## Installation

Install cookiecutter:

```bash
pip install cookiecutter
```

Create a new repo from this template

```bash
cookiecutter https://github.com/liammurray/cookiecutter-typescript.git
```

Local (e.g. clone to test and make updates)

```bash
cookiecutter /path/to/cookiecutter-typecript
```

## Sync local changes

One way to update the cookie cutter template is make change to a local project created from the template. See things that are excluded in `.rsync-exclude`.

```bash
# Add -v for verbose mode
rsync -r --exclude-from=.rsync-exclude <PATH/TO/PROJECT> \{\{cookiecutter.repo_name\}\}/
```

Afterwards make a few manual updates as needed (these are excluded to avoid clobbering template params).

- README.md
- package.json
