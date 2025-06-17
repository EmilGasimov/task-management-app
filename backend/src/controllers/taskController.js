class TaskController {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }

    async createTask(req, res) {
        try {
            const taskData = req.body;
            const newTask = await this.taskModel.save(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error });
        }
    }

    async getTasks(req, res) {
        try {
            const tasks = await this.taskModel.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tasks', error });
        }
    }

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const taskData = req.body;
            const updatedTask = await this.taskModel.update(id, taskData);
            if (updatedTask) {
                res.status(200).json(updatedTask);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating task', error });
        }
    }

    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            const deleted = await this.taskModel.delete(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }
}

export default TaskController;