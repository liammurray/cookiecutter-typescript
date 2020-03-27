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
cd <project>
make utest
make dist
./run
```

Local (e.g. clone to test and make updates)

```bash
cookiecutter /path/to/cookiecutter-typecript
```

## Making changes

To make changes and update this cookiecutter project.

1. Create a project from the cookiecutter and make changes.

1. Run the following (in this dir) to add back cookiecutter replacements.

   Note that this makes package.json unusable (invalid characters in name, etc.)

   ```bash
   ./prepare ../path/to/project
   ```

1. Copy changes.

   It will first run rsync in dry-run mode and then prompt to run the rsync command.
   You might need to add more excludes to `./rsync-exclude` if you see things that will
   be copied that you don't want to copy.

   This excludes files (README.md) that have cookiecutter replacements (can add these to prepare script eventually). Those you have to do by hand (next step).

   ```bash
   ./sync ../path/to/project
   ```

1. See additional changes you need to make by hand.

   ```bash
   ./changes ../path/to/project
   ```

   This shows changes for files included in `.rsync-exclude`, which includes files that cookiecutter modifies with template parameters (and which rsync would always try to copy otherwise).
