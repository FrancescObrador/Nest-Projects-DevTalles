FROM node:20.12.2-alpine3.19

# Set working directory
WORKDIR /var/www/pokedex

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --prod

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Create a non-root user
RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser /var/www/pokedex
USER pokeuser

# Clean up cache
RUN yarn cache clean --force

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]
