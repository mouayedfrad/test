# Use a newer version of Node.js that supports npm 11.x
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies with legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# Serve the application using a lightweight HTTP server
RUN npm install -g serve

# Expose the port on which the application runs
EXPOSE 3000

# Command to start the server
CMD ["serve", "-s", "build", "-l", "3000"]
