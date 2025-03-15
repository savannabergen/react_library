# Use an official Node.js 20 image
FROM node:20-alpine

# Set the working directory
WORKDIR /savanna_bergen_ui_garden_build_checks

# Copy the package*.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the production version
RUN npm run build

# Expose port 8083
EXPOSE 8018

# Run the command to start the development server
CMD ["npm", "run", "storybook"]