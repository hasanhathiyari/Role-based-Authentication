# Role-Based Music Streaming API

A backend API for a music application with user authentication,
role-based authorization, and music upload functionality.

## Features

- User authentication using JWT
- Role-based authorization
- Protected API routes
- MongoDB database integration
- Music upload using ImageKit
- REST API architecture

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- ImageKit

## Project Structure

```text
src/
├── controllers/
├── db/
├── models/
├── routes/
├── services/
└── app.js

server.js
package.json
```

## Prerequisites

- Node.js and npm
- MongoDB
- ImageKit account for music uploads

## Installation

1. Clone this repository.

2. Install dependencies:

   npm install

3. Create a `.env` file in the root directory.

4. Add the required environment variables using `.env.example`
   as a reference.

5. Start the development server:

   npm run dev

## Environment Variables

Configure the environment variables required by the application.

See `.env.example` for the expected variable names.

## API Documentation

Document the available authentication, authorization, and music
endpoints here, including their HTTP methods and request bodies.

## Security

Never commit real environment variables, private keys, or database
credentials.

## Author

Hasan Hathiyari