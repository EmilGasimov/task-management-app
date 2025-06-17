# Task Management Application - Backend

## Overview
This is the backend for the Task Management Application, built using Node.js and Express. It provides a RESTful API for managing tasks, including creating, retrieving, updating, and deleting tasks.

## Technologies Used
- Node.js
- Express
- MySQL or PostgreSQL (depending on your choice)
- Body-parser

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd task-management-app/backend
   ```

2. **Install Dependencies**
   Run the following command to install the necessary packages:
   ```bash
   npm install
   ```

3. **Database Configuration**
   - Ensure you have MySQL or PostgreSQL installed and running.
   - Create a database for the application.
   - Update the database connection settings in `src/db/index.js` to match your database configuration.

4. **Run the Application**
   Start the server using the following command:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Tasks
- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/:id**: Update an existing task.
- **DELETE /api/tasks/:id**: Delete a task.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.