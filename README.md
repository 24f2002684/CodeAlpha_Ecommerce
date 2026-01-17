# 🛒 CodeAlpha E-Commerce Store (Full Stack)

A full-stack e-commerce web application built as part of the **CodeAlpha Full Stack Development Internship**.
This project demonstrates end-to-end development using **Node.js, Express, MongoDB**, and a **Bootstrap-based frontend**, with secure authentication and session-based cart handling.

---

## 🚀 Features

### 🔐 Authentication

* User Registration & Login
* Secure password hashing using **bcrypt**
* Session-based authentication
* Logout functionality

### 🛍️ Products

* View all products
* Individual product detail page
* Dynamic product loading from database

### 🛒 Cart & Orders

* Session-based cart (server-side)
* Add / remove products from cart
* Checkout flow (Cart ➜ Order)
* View user orders
* Protected routes using middleware

### 🎨 Frontend

* Dark themed UI
* Built with **Bootstrap 5**
* Dynamic navbar based on login state
* Clean and responsive design

---

## 🧑‍💻 Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap 5
* Vanilla JavaScript (Fetch API)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* express-session
* bcryptjs

### Tools

* Git & GitHub
* Nodemon
* Thunder Client / Postman

---

## 📁 Project Structure

```
CodeAlpha_Ecommerce/
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── views/
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   └── register.html
│
├── public/
│   ├── css/
│   └── js/
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/CodeAlpha_Ecommerce.git
cd CodeAlpha_Ecommerce
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/codealpha_ecommerce
```

Make sure MongoDB service is running.

### 4️⃣ Run the application

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🧪 How to Use

1. Register a new user
2. Login with credentials
3. Browse products
4. View product details
5. Add items to cart
6. Checkout to place an order
7. View orders

---

## 🧠 Learning Outcomes

Through this project, I learned:

* Building RESTful APIs using Express.js
* Session-based authentication & authorization
* Secure password handling
* MongoDB schema design with Mongoose
* Middleware for route protection
* Frontend–backend integration
* Real-world project structuring
* Debugging backend issues effectively

---

## 📌 Internship Context

This project was developed as part of the **CodeAlpha Virtual Internship (Full Stack Development)** and fulfills the requirement of completing project-based tasks using modern web technologies.

---

## 👤 Author

**Suhail Akthar S M**
B.Tech IT – Chennai Institute of Technology
BS in Data Science – IIT Madras

---

## ⭐ Acknowledgement

Thanks to **CodeAlpha** for providing hands-on project-based learning and an opportunity to strengthen real-world full-stack development skills.

---