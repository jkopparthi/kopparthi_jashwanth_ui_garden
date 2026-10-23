# ---------- Stage 1: build the production bundle of the Create React App ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first so Docker can cache this layer
COPY package.json package-lock.json .npmrc ./
RUN npm ci

# Copy the source and create the optimized production build
COPY . .
RUN npm run build

# ---------- Stage 2: serve the build with nginx on port 8083 ----------
FROM nginx:1.27-alpine

# Site files are hosted from a working directory named lastName_firstName_ui_garden
WORKDIR /kopparthi_jashwanth_ui_garden
COPY --from=build /app/build .

# nginx is configured to serve /kopparthi_jashwanth_ui_garden on port 8083
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
