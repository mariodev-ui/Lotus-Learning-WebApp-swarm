# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define environment variable
ENV PORT=3001

# Run app.py when the container launches
CMD ["npm", "start"]
