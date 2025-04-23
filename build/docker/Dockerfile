# Build Stage
# ---
FROM node:23-slim AS builder

# Use a non-root user for the build stage too (optional hardening)
RUN useradd --uid 1001 --create-home appuser
USER appuse

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci --omit=optional

COPY . .

#Run the  build script
RUN npm run build

#Install only production dependencies
RUN rm -rf node_modules && npm ci --omit:dev --ignore-scripts

# Run Stage
# ---
FROM gcr.io/distroless/nodejs:23

USER 1001:1001

COPY --chown=1001:1001 --from=builder /opt/app /opt/app
WORKDIR /opt/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PATH /opt/node_app/node_modules/.bin:$PATH

CMD ["dist/main.js"]
