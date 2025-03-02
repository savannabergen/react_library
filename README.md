# Bergen Savanna Coding Assignment 12

Vite + React Typescript Storybook Component Library

## Instalation

To build the Docker image, navigate to the root directory of the project and run the following command:

```bash
docker build -t bergen_savanna_assignment12 .
```

## Usage

Run this command and manually navigate to localhost:8083

```bash
docker run -p 8083:8083 storybook npm run storybook -- --no-open
```