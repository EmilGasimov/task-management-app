class TaskModel {
    constructor(db) {
        this.db = db;
    }

    async save(task) {
        const query = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
        const values = [task.title, task.description, task.status];
        const [result] = await this.db.execute(query, values);
        return result.insertId;
    }

    async findAll() {
        const query = 'SELECT * FROM tasks';
        const [rows] = await this.db.execute(query);
        return rows;
    }

    async findById(id) {
        const query = 'SELECT * FROM tasks WHERE id = ?';
        const values = [id];
        const [rows] = await this.db.execute(query, values);
        return rows[0];
    }

    async update(id, task) {
        const query = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
        const values = [task.title, task.description, task.status, id];
        await this.db.execute(query, values);
    }

    async delete(id) {
        const query = 'DELETE FROM tasks WHERE id = ?';
        const values = [id];
        await this.db.execute(query, values);
    }
}

export default TaskModel;