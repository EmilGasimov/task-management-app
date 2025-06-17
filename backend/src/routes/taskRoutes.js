const express = require('express');
const TaskController = require('../controllers/taskController');

const router = express.Router();
const taskController = new TaskController();

const setRoutes = (app) => {
    router.post('/tasks', taskController.createTask);
    router.get('/tasks', taskController.getTasks);
    router.put('/tasks/:id', taskController.updateTask);
    router.delete('/tasks/:id', taskController.deleteTask);

    app.use('/api', router);
};

module.exports = setRoutes;