# Pyth Network Documentation

This repository contains interactive documentation for the [Pyth Network](https://www.pyth.network/) blockchain oracle.

## Documentation Format

### Interactive components

The interactive components on each page use a shared-key value store to communicate with each other.
This key-value store is

## Local Development

First, run `npm i` to install the dependencies.

Then, run `npm run dev` to start the development server and visit localhost:3000.

## Deployment

Use the `Dockerfile` in the root of the repository to build a docker image that can be run for production deployments.
You can test out the docker build locally by running:

```
docker build -t documentation -f Dockerfile .
docker run -d -p 3000:3000 documentation
```

Then navigate to localhost:3000 in the browser.

## Tests

Simply run `npm run test`.

The tests include a compiler check for all code snippets written in .mdx files. These tests will automatically extract
the relevant snippets into separate files under the `.code_tests` folder (ignored by git) and then try to build each one.
The files are named per the file path to the code snippet.
These files remain after the tests complete, which allows you to examine them to help debug the error in case a test fails.

You can also run the code tests for a specific mdx file using:

```
npm run test -- -t get-price.mdx
```

## License

This project is derived from the [Nextra Docs Template](https://github.com/shuding/nextra-docs-template).
See `notices/` for mandatory license disclosures.
