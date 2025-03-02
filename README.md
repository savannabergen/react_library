Bergen Savanna Coding Assignment 12

Instructions

Build the Docker image

To build the Docker image, navigate to the root directory of the project and run the following command:


docker build -t bergen_savanna_coding_assignment12 .


Run the Docker container

Once the image is built, you can run the Docker container using the following command:


docker run -p 8083:8083 bergen_savanna_coding_assignment12 npm run storybook -- --no-open


Access the site

Open a web browser and navigate to http://localhost:8083 to access the Storybook site.