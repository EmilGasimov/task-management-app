const express = require('express');
const TaskController = require('../controllers/taskController');
const Task = require('../models/taskModel'); // Make sure you have this

const router = express.Router();
const taskController = new TaskController(Task);

router.post('/', taskController.createTask.bind(taskController));
router.get('/', taskController.getTasks.bind(taskController));
router.put('/:id', taskController.updateTask.bind(taskController));
router.delete('/:id', taskController.deleteTask.bind(taskController));

module.exports = router;