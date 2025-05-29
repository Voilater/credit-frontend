# Stage 1: Build React app
FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy source files and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the app with a lightweight server
FROM nginx:alpine

# Copy the build output to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
