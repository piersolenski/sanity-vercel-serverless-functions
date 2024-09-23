# Sanity Vercel Serverless Functions

This is a minimal reproducible example that demonstrates the issue of not being able to use Vercel Serverless Functions with Sanity v3.

## Setup

1. Install node bloat:

`npm i`

2. Setup Vercel and run development environment:

`vercel dev`

This will create a new Vercel project if one does not exist, or link it to one if it does. After that it will begin running the server.

## The issue

The Sanity Studio will now be available at port `3000`. If we call the serverless function located in `localhost:3000/api/hello-world`, it will return `Hello World`. 

How can I change the port back to the default for Sanity, `3333`, whilst keeping both the Sanity Studio and serverless function operational?

If I change `sanity dev --port $PORT` to `sanity dev --port 3000`, Sanity will work, but the serverless function won't.
