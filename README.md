# AWDF Practical 4 - Task Manager API - 24CS037

**Student:** Ayush Kanani  
**Student ID:** 24CS037  
**Subject:** Advanced Web Development Frameworks (ITUE301)  
**Practical:** 4 - Building a RESTful API with Node.js and Express

## Objective
Implement a RESTful Task Management backend with CRUD operations and an Express middleware pipeline.

## Features
- In-memory task storage
- GET, POST, PUT and DELETE operations
- Global request logger
- JSON Content-Type validation for POST/PUT
- Route-specific task ID validation
- Structured 404 response
- Centralized global error handler
- Appropriate HTTP status codes

## Structure
```text
task-manager-api-24cs037/
├── middleware/
│   ├── contentType.js
│   ├── errorHandler.js
│   ├── notFound.js
│   └── requestLogger.js
├── routes/
│   └── tasks.js
├── utils/
│   └── taskStore.js
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Run
```bash
npm install
npm start
```

Server:
```text
http://localhost:5000
```

## Endpoints
```text
GET    http://localhost:5000/tasks
POST   http://localhost:5000/tasks
PUT    http://localhost:5000/tasks/:id
DELETE http://localhost:5000/tasks/:id
```

## POST body
Use `Content-Type: application/json`:
```json
{
  "title": "Learn Node.js",
  "description": "Practice Express middleware",
  "completed": false
}
```

## PUT example
```text
PUT http://localhost:5000/tasks/101
```

```json
{
  "title": "Finish AWDF Practical 4",
  "description": "CRUD and middleware tested",
  "completed": true
}
```

## GitHub
Recommended repository:
```text
task-manager-api-24cs037
```

Suggested commit:
```text
feat: implement 24CS037 task manager REST API
```

## Deployment
GitHub Pages cannot run an Express backend. Keep the source in GitHub and deploy the Node.js server on a backend platform such as Render.

Because this practical uses in-memory storage, tasks reset when the server restarts.
