# Task Manager API

A simple **Task Manager API** for understanding for **Express.js** and api best practices

---

## Features

1. **Create a Task**  
2. **Fetch All Tasks**  
3. **Fetch a Task by ID**  
4. **Update a Task**  
5. **Delete a Task**

---

## Tech Stack

- **Node.js**
- **Express.js**
- **Joi** (Validation)

---

## Installation

1. **Clone the Repository**  
   ```bash
   git clone git@github.com:airtribe-projects/task-manager-api-charanjsingh29.git
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Server**  
   ```bash
   npm run dev
   ```

---

## Example API Endpoints

1. **Create a Task**  
   - `POST /tasks`  
   - **Request Body**:  
     ```json
     {
       "title": "New Task",
       "description": "Task Description",
       "completed": false
     }
     ```
   - **Response**:
     ```json
     {
       "id": 1,
       "title": "New Task",
       "description": "Task Description",
       "completed": false
     }
     ```

2. **Fetch All Tasks**  
   - `GET /tasks`  

3. **Fetch Task by ID**  
   - `GET /tasks/:id`

4. **Update Task**  
   - `PUT /tasks/:id`  

5. **Delete Task**  
   - `DELETE /tasks/:id`

---

## Run Tests

Tests are written using **Tap** and **Supertest**. Run the tests with:

```bash
npm test
```
