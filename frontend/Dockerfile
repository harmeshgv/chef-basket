# Use an official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build 

# Use an Nginx image to serve the build files
FROM nginx:alpine

# Copy build output to Nginx’s public directory
COPY --from=build /frontend/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
