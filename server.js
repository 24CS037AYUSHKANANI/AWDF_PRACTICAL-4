const express = require("express");
const taskRoutes = require("./routes/tasks");
const requestLogger = require("./middleware/requestLogger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(requestLogger);
app.use("/tasks", taskRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("========================================");
  console.log("AWDF Practical 4 - Task Manager API");
  console.log("Student : Ayush Kanani");
  console.log("ID      : 24CS037");
  console.log(`Server  : http://localhost:${PORT}`);
  console.log("========================================");
  console.log(`GET    http://localhost:${PORT}/tasks`);
  console.log(`POST   http://localhost:${PORT}/tasks`);
  console.log(`PUT    http://localhost:${PORT}/tasks/:id`);
  console.log(`DELETE http://localhost:${PORT}/tasks/:id`);
});
