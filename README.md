# Bergen Savanna Coding Assignment 13

Vite + React Typescript Storybook Component Library

## Getting Started

To build the Docker image, navigate to the root directory of the project and run the following command:

```bash
docker build -t bergen_savanna_assignment12 .
```

Run this command and manually navigate to localhost:8083

```bash
docker run -p 8018:8018 storybook npm run storybook -- --no-open
```

### Pre-Commit Checks

This repository uses Husky to run pre-commit checks. These checks include:

1. Prettier: npm run format
2. ESLint: npm run lint
3. Tests: npm test

#### GitHub Actions

This repository also uses GitHub Actions to run the same checks on every push event. This ensures that the code is validated even if the pre-commit hooks are bypassed. Addtionally, it will build the Docker image automatically.
