# Step 1: Build the Next.js app
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build the project
RUN npm run build

# Step 2: Serve static files using Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy the exported files to Nginx's HTML directory
COPY --from=builder /app/out .

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
