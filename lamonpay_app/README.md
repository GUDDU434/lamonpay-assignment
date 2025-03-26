# Task Management Frontend

## Overview

This is a Task Management frontend built using **React.js** with **Vite** for efficient task management and user experience.

## Features

- User authentication (Login/Signup)
- Task creation, updating, deletion, and retrieval
- Responsive UI for seamless experience
- API integration with the backend

## Tech Stack

- **React.js** – Frontend library
- **Vite** – Fast build tool
- **Axios** – HTTP requests
- **React Router** – Client-side routing

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/GUDDU434/lamonpay-assignment.git
   cd lamonpay_app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   - Rename `.env.example` to `.env` and update values accordingly.

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Build for production:**
   ```sh
   npm run build
   ```

## Environment Variables

The application requires the following environment variables, provided in `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME="Task Manager"
```

## Project Structure

```sh
src/
├── components/      # Reusable UI components
├── pages/          # Different pages (Login, Dashboard, etc.)
├── App.js          # Main application component
└── main.jsx        # Entry point
```

## Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## Contact

For any issues or suggestions, reach out via [gudduali93@yahoo.com](mailto:gudduali93@yahoo.com).
