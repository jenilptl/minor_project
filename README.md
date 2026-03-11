# 📦 Minor Project — User Management REST API

A clean, modular **RESTful API** for user management built with **Express.js** and **MySQL**. This project follows the **MVC (Model-View-Controller)** architecture pattern with a dedicated service layer, making it scalable and easy to maintain.

---

## ✨ Features

- 🔍 **Get All Users** — Retrieve a complete list of users
- 🔎 **Get User by ID** — Fetch a specific user by their ID
- ➕ **Create User** — Register a new user
- ✏️ **Update User** — Modify user details (partial update)
- 🗑️ **Delete User** — Remove a user by ID
- 🛡️ **SQL Injection Protection** — All queries use parameterized statements
- 📁 **Clean Architecture** — Organized in Routes → Services → Models layers

---

## 🏗️ Project Structure

```
minor_project/
├── db/
│   └── mysql.js            # MySQL connection pool configuration
├── models/
│   └── users.model.js      # Database queries (data access layer)
├── routes/
│   └── user.route.js       # Express route definitions
├── services/
│   └── users.service.js    # Business logic & response formatting
├── .env                    # Environment variables (not committed)
├── .env.example            # Environment variable template
├── .gitignore              # Git ignore rules
├── index.js                # Application entry point
├── package.json            # Project metadata & dependencies
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL](https://www.mysql.com/) server running locally
- A MySQL database named `kpp` with a `users` table

### 1. Clone the Repository

```bash
git clone https://github.com/jenilptl/minor_project.git
cd minor_project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and update the values:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=kpp
```

### 4. Set Up the Database

Create the database and table in MySQL:

```sql
CREATE DATABASE IF NOT EXISTS kpp;

USE kpp;

CREATE TABLE IF NOT EXISTS users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);
```

### 5. Run the Server

**Development** (with auto-reload):
```bash
npm run dev
```

**Production**:
```bash
npm start
```

The server will start at `http://localhost:3000`

---

## 📡 API Endpoints

Base URL: `http://localhost:3000`

| Method   | Endpoint      | Description           | Request Body                                     |
| -------- | ------------- | --------------------- | ------------------------------------------------ |
| `GET`    | `/users`      | Get all users         | —                                                |
| `GET`    | `/users/:id`  | Get user by ID        | —                                                |
| `POST`   | `/users`      | Create a new user     | `{ "UserName": "John", "Password": "secret" }`   |
| `PATCH`  | `/users/:id`  | Update a user         | `{ "UserName": "Jane", "Password": "newpass" }`   |
| `DELETE` | `/users/:id`  | Delete a user         | —                                                |

### Example Responses

**Success Response:**
```json
{
  "error": false,
  "data": [
    {
      "UserID": 1,
      "UserName": "Jenil",
      "Password": "hashed_password"
    }
  ],
  "message": "data fetched successfully"
}
```

**Error Response:**
```json
{
  "error": true,
  "message": "some error occurred while fetching data"
}
```

---

## 🛠️ Tech Stack

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| **Express.js** | Web framework for Node.js     |
| **MySQL2**     | MySQL database driver (async) |
| **dotenv**     | Environment variable management |
| **bcrypt**     | Password hashing (available)  |
| **nodemon**    | Auto-restart during development |

---

## 📐 Architecture

This project follows a **layered architecture** pattern:

```
Client Request
      ↓
┌─────────────┐
│   Routes    │  → Handles HTTP methods & URL routing
└─────┬───────┘
      ↓
┌─────────────┐
│  Services   │  → Business logic & response formatting
└─────┬───────┘
      ↓
┌─────────────┐
│   Models    │  → Database queries (parameterized)
└─────┬───────┘
      ↓
┌─────────────┐
│   MySQL DB  │  → Data storage
└─────────────┘
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**jenilptl** — [GitHub Profile](https://github.com/jenilptl)

---

> Built with ❤️ using Node.js, Express & MySQL
