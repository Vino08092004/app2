const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy product data with placeholders for missing images
let products = [
    { 
        id: 1, 
        name: 'Product 1', 
        price: 10, 
        image: "https://assets.ajio.com/medias/sys_master/root/20231016/L6FL/652c5051afa4cf41f5466bdf/-473Wx593H-466711316-blue-MODEL.jpg"
    },
    { 
        id: 2, 
        name: 'Product 2', 
        price: 15, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23Rz5s2JYPdTrfwK9msa0OL5_is1CsyQYpQ&s.jpg"  // Placeholder image for Product 2
    },
    { 
        id: 3, 
        name: 'Product 3', 
        price: 20, 
        image: "https://www.orra.co.in/media/catalog/product/cache/f863675abff2fd3fa792fa24743dba0a/o/s/osn23050.jpg"  // Placeholder image for Product 3
    }
];

// Shopping cart
let cart = [];

// Route to get products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Route to view cart
app.get('/api/cart', (req, res) => {
    res.json(cart);
});

// Route to add item to cart
app.post('/api/cart', (req, res) => {
    const { productId, quantity } = req.body;
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.productId === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ productId, quantity });
        }
        res.json(cart);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Route to update item quantity in cart
app.put('/api/cart/:productId', (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;
    const cartItem = cart.find(item => item.productId == productId);
    if (cartItem) {
        cartItem.quantity = quantity;
        res.json(cart);
    } else {
        res.status(404).json({ message: 'Item not found in cart' });
    }
});

// Route to remove item from cart
app.delete('/api/cart/:productId', (req, res) => {
    const { productId } = req.params;
    cart = cart.filter(item => item.productId != productId);
    res.json(cart);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
