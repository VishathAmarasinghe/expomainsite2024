# Use an official Node.js image as a base
FROM node:20.10.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json if you're using npm)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project

# Expose the port that the app runs on (assuming Vite uses port 3000 by default)
EXPOSE 5173

# Define the command to run the app in development mode
CMD ["npm","run","dev"]