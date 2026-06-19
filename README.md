# The Contractor - Frontend

Frontend application for **The Contractor** platform, built with **Next.js** and **React**.

The application provides a user-friendly interface for browsing construction equipment, viewing product details, managing a shopping cart, and handling user authentication and orders.

---

## 🚀 Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Context API
- LocalStorage
- REST API Integration with Django Backend

---

## ✨ Features

### User Features

- Browse available products and equipment
- View detailed product information
- Add products to cart
- Update product quantities in cart
- Remove products from cart
- Persistent cart storage using LocalStorage
- User registration and login
- User profile management
- View order history
- Order success confirmation page
- About page
- Contact page

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── about/
│   ├── auth/
│   ├── cart/
│   ├── contact/
│   ├── orders/
│   ├── profile/
│   ├── products/
│   │   └── [id]/
│   │
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   │
│   ├── layout.tsx
│   └── page.tsx
│
└── public/
```

---

## 🧩 Main Components

- Navbar
- Footer
- Product Cards
- Featured Equipment Section
- Equipment Details Page
- Shopping Cart Components
- Profile Components

---

## 🛒 Cart Management

The shopping cart is managed using the React Context API.

Features include:

- Add products to cart
- Increase and decrease product quantities
- Remove products from cart
- Persist cart data using LocalStorage
- Automatic cart state synchronization

---

## 🔗 Backend Integration

The frontend communicates with a Django REST Framework backend through REST APIs.

API configuration is handled in:

```text
src/app/utils/api.tsx
```

Authentication is performed using Token Authentication:

```http
Authorization: Token <token>
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd The-Contractor---frontend-main
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🌐 Backend API

The frontend is configured to communicate with:

```text
https://the-contractor.onrender.com/api
```

Make sure the backend server is running and accessible before using the application.

---

## 🎯 Future Improvements

- Product search and filtering
- Wishlist functionality
- Payment gateway integration
- Product reviews and ratings
- Admin dashboard enhancements
- Responsive UI improvements

---

## 👩‍💻 Author

**Hafsa Mohamed**

Junior Full-Stack Web Developer

Built using React, Next.js, and Django REST Framework.
