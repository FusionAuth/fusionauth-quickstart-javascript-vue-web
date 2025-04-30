# Example: Vue Application to Deploy with Vercel using FusionAuth

This repository contains a Vue app that works with a Vercel deployment.

## Setup

### Prerequisites
- [Node](https://nodejs.org/en/download/): This will be needed to run the Vue app.
- [FusionAuth]: A publicly available instance of FusionAuth.

### Vue complete-application

The `complete-application` directory contains a minimal Vue app configured to authenticate with a running intance of FusionAuth.

Install dependencies and run the Vue app with:
```
cd complete-application
npm i
npm start
```

Now vist the Vue app at [http://localhost:5173](http://localhost:4200)
You can log in with a user preconfigured during Kickstart, `richard@example.com` with the password of `password`.

### Deploying to Vercel

### Further Information

Visit https://fusionauth.io/quickstarts/quickstart-javascript-vue-web for a step by step guide on how to build this Vue app integrated with FusionAuth from scratch.

### Troubleshooting

* I get `This site can’t be reached  localhost refused to connect.` when I click the Login button

Ensure FusionAuth is running in the Docker container.  You should be able to login as the admin user, `admin@example.com` with the password of `password` at http://localhost:9011/admin

### Maintaining this repo

> Please note that code snippets from this repository are pulled into [this tutorial](https://fusionauth.io/docs/quickstarts/quickstart-javascript-vue-web) on the fusionauth site. Please consider this when making changes here.