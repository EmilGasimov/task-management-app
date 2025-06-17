import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTask.title) return;
    try {
      await createTask(newTask);
      setNewTask({ title: '', description: '' });
      fetchTasks();
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      await updateTask(task.id, { completed: !task.completed });
      fetchTasks();
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={newTask.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
              onClick={() => handleToggleComplete(task)}
            >
              {task.title}
            </span>
            {' '}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <div style={{ fontSize: '0.9em', color: '#666' }}>{task.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;