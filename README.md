# Car Showroom Backend

A backend application for a Car Showroom Management System built with **Node.js, Express.js, and MongoDB** using the MVC architecture.

## Features

- User Registration and Login
- Admin Registration and Login
- JWT-based Authentication
- Role-based Authorization
- Car Management
- Product and Car Inventory
- Address Management
- Shopping Cart
- Order Management
- Image Uploads

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Multer (for image uploads, if configured)

## Project Structure

```text
Car-Showroom/
├── controllers/
├── middleware/
├── models/
├── routes/
├── service/
├── uploads/
├── connection.js
├── index.js
├── package.json
└── package-lock.json
```

*Note: The folders listed above represent the general project structure. Adjust them to match your actual files.*

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/maazmuhammad5678/car-showroom.git
```

### 2. Open the Project Folder

```bash
cd Car-Showroom
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your computer.

The application uses the MongoDB connection string configured in its source code. No `.env` file is required for the current setup.

### 5. Run the Server

```bash
node index.js
```

If Nodemon is configured in your project, you can also start the server using your configured development script.

The server runs on port **8000**, according to the current project configuration.

## API Routes

| Route | Purpose |
|---|---|
| `/api/user` | User authentication and related operations |
| `/api/admin` | Admin authentication and operations |
| `/api/product` | Car and product management |
| `/api/address` | Address management |
| `/api/cart` | Shopping cart operations |
| `/api/order` | Order management |

Available operations depend on the endpoints implemented in each route file.

## Authentication

The application uses JSON Web Tokens (JWT) to authenticate users. Protected routes require a valid token, and role-based middleware can restrict access to authorized users.

## Image Uploads

Uploaded car images are stored in the `uploads` directory when image-upload functionality is used.

## Database

The application uses MongoDB to store user, car, address, cart, and order data.

## Future Improvements

- Payment Gateway Integration
- Search and Filtering
- Pagination
- Improved Input Validation
- API Documentation
- Automated Testing

## Author

**Muhammad Maaz Bin Aamir**

GitHub: [maazmuhammad5678](https://github.com/maazmuhammad5678)

---

This project was developed for learning backend development, REST APIs, database integration, authentication, and MVC architecture.
