# 📦 Express.js Products API

## 🔥 Overview

A RESTful API built with **Express.js** to manage a list of products. Supports full CRUD operations, middleware, error handling, and advanced features like filtering, search, and pagination.

---

## 📁 File Structure

```
express-products-api/
├── server.js
├── routes/
├── middleware/
├── models/
├── utils/
├── data/
├── .env.example
└── README.md
```
---

## 🧰 Technologies Used

- Node.js
- Express.js
- Body-Parser
- UUID (for unique IDs)
- Dotenv (for environment variable management)
- pnpm (for dependency management)
- nodemon (for live-reloading during development)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/express-products-api.git
cd express-products-api
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Create Your `.env` File

```bash
cp .env.example .env
```

### 4. Start the Development Server

```bash
pnpm dev
```
Server runs at: (http://localhost:3000)

---

## 🔐 Environment Variables

| Variable | Description                    | Example |
| -------- | ------------------------------ | ------- |
| PORT     | Port to run the server on      | 3000    |
| API_KEY  | Key required for secure routes | 123456  |

---

## 📚 API Endpoints

| Method | Endpoint            | Description                | Protected |
| ------ | ------------------- | -------------------------- | :-------: |
| GET    | `/api/products`     | List all products          | ❌        |
| GET    | `/api/products/:id` | Get a product by ID        | ❌        |
| POST   | `/api/products`     | Create a new product       | ✅        |
| PUT    | `/api/products/:id` | Update an existing product | ✅        |
| DELETE | `/api/products/:id` | Delete a product           | ✅        |

> **Note:** All protected routes require a valid `x-api-key` header with the correct value from `.env`.

---

## ✨ Advanced Features

- 🎯 **Filter by Category**  
  Endpoint: `GET /api/products?category=food`  
  Example: `/api/products?category=electronics`

- 📄 **Pagination**  
  Endpoint: `GET /api/products?page=1&limit=5`  
  Example: `/api/products?page=2&limit=3`

- 🔍 **Search**  
  Endpoint: `GET /api/products/search?name=tv`  
  Example: `/api/products/search?name=laptop`

- 📊 **Stats**  
  Endpoint: `GET /api/products/stats`  
  Example:

---

## 🧪 Testing the API

You can test this API using:

- **Postman** – Send requests to test all endpoints
- **Insomnia** – Alternative REST client
- **curl** – Test from terminal:

```bash
curl http://localhost:3000/api/products
```

---

## 🛡️ Error Handling

The API includes global error handling with:

- Custom error messages
- Appropriate HTTP status codes (400, 401, 403, 404, 500)
- Safe fallbacks and validation checks

---

## ✍️ Author

**Sylvester L. Kesa**  
📧 (mailto:kesasylvesterlee@gmail.com)

---

## 🧾 License

This project is open-source under the (LICENSE).