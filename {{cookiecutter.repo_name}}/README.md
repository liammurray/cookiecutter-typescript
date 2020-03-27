# {{cookiecutter.repo_name}}

{{cookiecutter.repo_description}} by {{cookiecutter.repo_author}}

## Build

Using makefile

```bash
make build
make utest
```

Using npm

```bash
npm install
npm run build
npm run test
npm run test:cov
```

## Develop (watch)

Run in watch mode under nodemon (ts-node):

```bash
npm install -g pino-pretty
make develop
```

## Lambda

Package to `./lambda` with production dependencies only:

```bash
make lambda
```

TODO: Need to remove .ts files
