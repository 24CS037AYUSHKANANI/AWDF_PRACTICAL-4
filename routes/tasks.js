const express = require("express");
const jsonOnly = require("../middleware/contentType");
const { getTasks, addTask, findTask, removeTask } = require("../utils/taskStore");

const router = express.Router();

function checkTaskId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(404).json({
      success: false,
      studentId: "24CS037",
      error: "Invalid task ID"
    });
  }
  req.taskId = id;
  next();
}

router.get("/", (req, res) => {
  const tasks = getTasks();
  res.status(200).json({
    success: true,
    studentId: "24CS037",
    count: tasks.length,
    tasks
  });
});

router.get("/:id", checkTaskId, (req, res) => {
  const task = findTask(req.taskId);
  if (!task) {
    return res.status(404).json({
      success: false,
      studentId: "24CS037",
      error: "Task not found"
    });
  }
  res.status(200).json({ success: true, studentId: "24CS037", task });
});

router.post("/", jsonOnly, (req, res, next) => {
  try {
    const { title, description, completed } = req.body;

    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        success: false,
        studentId: "24CS037",
        error: "A non-empty title is required"
      });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({
        success: false,
        studentId: "24CS037",
        error: "Completed must be true or false"
      });
    }

    const task = addTask({
      title: title.trim(),
      description: typeof description === "string" ? description : "",
      completed
    });

    res.status(201).json({
      success: true,
      studentId: "24CS037",
      message: "Task created successfully",
      task
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", checkTaskId, jsonOnly, (req, res, next) => {
  try {
    const task = findTask(req.taskId);

    if (!task) {
      return res.status(404).json({
        success: false,
        studentId: "24CS037",
        error: "Task not found"
      });
    }

    const { title, description, completed } = req.body;

    if (title !== undefined) {
      if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
          success: false,
          studentId: "24CS037",
          error: "Title must be a non-empty string"
        });
      }
      task.title = title.trim();
    }

    if (description !== undefined) {
      if (typeof description !== "string") {
        return res.status(400).json({
          success: false,
          studentId: "24CS037",
          error: "Description must be a string"
        });
      }
      task.description = description;
    }

    if (completed !== undefined) {
      if (typeof completed !== "boolean") {
        return res.status(400).json({
          success: false,
          studentId: "24CS037",
          error: "Completed must be true or false"
        });
      }
      task.completed = completed;
    }

    res.status(200).json({
      success: true,
      studentId: "24CS037",
      message: "Task updated successfully",
      task
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", checkTaskId, (req, res, next) => {
  try {
    const task = removeTask(req.taskId);

    if (!task) {
      return res.status(404).json({
        success: false,
        studentId: "24CS037",
        error: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      studentId: "24CS037",
      message: "Task deleted successfully",
      task
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
