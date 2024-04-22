# Use an official Ruby image as the base image
FROM ruby:latest

RUN bundle config --global frozen 1
# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Gemfile and Gemfile.lock from your project directory to the container
COPY Gemfile Gemfile.lock ./

# Install Jekyll and other dependencies
RUN gem install jekyll bundler && bundle install

# Copy the rest of your project files to the container
COPY . .

# Expose the default Jekyll port (4000)
EXPOSE 4000

# Command to serve the Jekyll site
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]

