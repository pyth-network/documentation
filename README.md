# Pyth Network documentation

This repository contains interactive documentation for the [Pyth Network](pyth.network) blockchain oracle.

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

## License

This project is derived from the [Nextra Docs Template](https://github.com/shuding/nextra-docs-template).
See `notices/` for mandatory license disclosures.