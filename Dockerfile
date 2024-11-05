# Use an official Node.js image as the base image
FROM node:22

# Set the working directory
WORKDIR  /workspace

# Copy the package.json and package-lock.json files (if present)
COPY package*.json ./

#install build-essential
RUN apt-get update && apt-get install -y build-essential && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install project dependencies
RUN npm install

# install globally eslint typescript
RUN npm install -g eslint typescript

# Expose port 3000 (or another port, as needed)
EXPOSE 3000

