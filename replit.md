# Practice RR

## Overview
A simple Node.js/Express web application starter project.

## Project Structure
```
.
├── server.js          # Express server (port 5000)
├── public/            # Static files
│   ├── index.html     # Main HTML page
│   ├── styles.css     # Styles
│   └── app.js         # Client-side JavaScript
├── package.json       # Node.js dependencies
└── .gitignore         # Git ignore patterns
```

## Running the Application
The application runs on port 5000 using `npm start`.

## API Endpoints
- `GET /` - Serves the main HTML page
- `GET /api/health` - Health check endpoint

## Recent Changes
- 2026-01-20: Initial project setup with Express server and basic frontend
