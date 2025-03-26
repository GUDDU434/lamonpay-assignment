# Task Management Backend

## Overview
This is a Task Management backend built using **Node.js**, **Express.js**, and **MongoDB** for efficient task management and data storage.

## Features
- User authentication (JWT-based login/signup)
- Task creation, updating, deletion, and retrieval
- Secure API endpoints
- Error handling and validation

## Tech Stack
- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB** – NoSQL database for data storage
- **Mongoose** – ODM for MongoDB
- **dotenv** – For managing environment variables
- **jsonwebtoken (JWT)** – User authentication

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/GUDDU434/lamonpay-assignment.git
   cd server
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Rename `.env.example` to `.env` and update values accordingly.

4. **Run the server in development mode:**
   ```sh
   npm run dev
   ```

5. **Run the server in production mode:**
   ```sh
   npm start
   ```

## Environment Variables
The application requires the following environment variables, provided in `.env.example`:

```env
PORT=8000
JWT_SECRET=
JWT_REFRESH_SECRET=
MONGODB_URL=mongodb://localhost:27017/lamonpay
``` 

## API Endpoints
### **Auth Routes**
| Method | Endpoint          | Description        |
|--------|------------------|--------------------|
| POST   | `/auth/signup` | Register a user   |
| POST   | `/auth/login`  | Login a user      |

### **Task Routes**
| Method | Endpoint           | Description            |
|--------|-------------------|------------------------|
| GET    | `/fetchAllTasks`      | Get all tasks         |
| POST   | `/add`      | Create a new task     |
| PUT    | `/updateTaskById/:id`  | Update a task         |
| DELETE | `/deleteTaskById/:id`  | Delete a task         |

## Contributing
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## Contact
For any issues or suggestions, reach out via [gudduali93@yahoo.com](mailto:gudduali93@yahoo.com).

