# Sanity Vercel Serverless Functions

This is a minimal reproducible example that demonstrates the issue of not being able to use Vercel Serverless Functions with Sanity v3.

## Setup

1. Install node bloat:

`npm i`

2. Setup Vercel and run development environment:

`vercel dev`

This will create a new Vercel project if one does not exist, or link it to one if it does. After that it will begin running the server.

## The issue

The Sanity Studio will now be available at the port specified in the CLI. However, if we call the serverless function located in `/api/hello-world`, it will return `Hello World`. 

However, on our personal Vercel & Sanity project, it will return Sanity related HTML rather than the desired "Hello World" response.
