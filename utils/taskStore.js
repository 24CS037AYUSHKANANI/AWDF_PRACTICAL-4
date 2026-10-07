let tasks = [
  {
    id: 101,
    title: "Prepare AWDF Practical 4",
    description: "Implement the Express REST API",
    completed: false
  },
  {
    id: 102,
    title: "Verify API endpoints",
    description: "Test CRUD operations using Postman",
    completed: false
  }
];

let nextTaskId = 103;

function getTasks() {
  return tasks;
}

function addTask(data) {
  const task = {
    id: nextTaskId++,
    title: data.title,
    description: data.description || "",
    completed: data.completed ?? false
  };
  tasks.push(task);
  return task;
}

function findTask(id) {
  return tasks.find(task => task.id === id);
}

function removeTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return null;
  return tasks.splice(index, 1)[0];
}

module.exports = { getTasks, addTask, findTask, removeTask };
