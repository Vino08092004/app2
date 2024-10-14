# Shopping Cart System (Node.js + React.js)

This is a simple shopping cart application built with a Node.js backend and a React.js frontend. It allows users to view a list of products, add items to their cart, update quantities, and remove items from the cart.

## Features

- **Backend**: API to handle shopping cart functionality, including:
  - Adding items to the cart
  - Updating item quantities
  - Removing items from the cart
  - Viewing the current cart details
- **Frontend**: User interface built with React.js for:
  - Displaying available products
  - Adding products to the cart
  - Viewing and managing cart items

## Project Structure

- **Backend**: Implemented using Node.js and Express.
- **Frontend**: Built using React.js.
- **Dummy Data**: Used for products (e.g., product name, price, and image).

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): Installed automatically with Node.js.
- **React.js**: You will set this up during frontend configuration.

### 1. Backend Setup (Node.js)

1. Clone the repository or download the project files.

2. Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
3.Start the backend server:
 npm start
 The server will start on port 5000 by default.

# API Endpoints (Backend)
The backend API provides the following endpoints:

GET /api/products: Returns a list of available products.
GET /api/cart: Returns the current items in the user's cart.
POST /api/cart: Adds an item to the cart. Requires productId and quantity in the request body.
PUT /api/cart/:productId: Updates the quantity of a specific item in the cart. Requires quantity in the request body.
DELETE /api/cart/:productId: Removes an item from the cart based on the productId

# Key Files
server.js: Contains the backend Node.js server logic.
App.js: Contains the main React.js code for handling product display and cart management.
package.json: Contains project metadata and dependencies for both the frontend and backend.

# Project Screenshots

Shopping Cart Overview

![Screenshot (26)](https://github.com/user-attachments/assets/4a4d457b-a7b3-4cb9-938e-bab374bf1b44)

Adding the Item

![Screenshot (27)](https://github.com/user-attachments/assets/5d67462f-660a-4837-8645-648a4713dbc3)

Updating the item quantity

![Screenshot (28)](https://github.com/user-attachments/assets/c35a7d9a-5011-4fd8-a9ab-b5f689256c8a)

Deleting the items 

![Screenshot (29)](https://github.com/user-attachments/assets/e9878667-88d9-488c-a896-55f798182962)

# License
This project is open-source and available under the MIT License.

### Final Thoughts:
The README file provides instructions on how to run both the backend and frontend and gives an overview of the available API endpoints and dummy data. You can modify it based on your own customizations or requirements for the project. Let me know if you need any further adjustments!




