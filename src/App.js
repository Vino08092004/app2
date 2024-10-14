import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                console.log(response.data);  // Log products data for debugging
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cart');
                setCart(response.data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };
        fetchCart();
    }, []);

    const addToCart = async (productId) => {
        try {
            await axios.post('http://localhost:5000/api/cart', { productId, quantity });
            setQuantity(1); // Reset quantity input
            setMessage('Item added to cart!');
            const response = await axios.get('http://localhost:5000/api/cart');
            setCart(response.data);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const updateQuantity = async (productId) => {
        const newQuantity = prompt("Enter new quantity:");
        if (newQuantity) {
            try {
                await axios.put(`http://localhost:5000/api/cart/${productId}`, { quantity: parseInt(newQuantity) });
                setMessage('Quantity updated!');
                const response = await axios.get('http://localhost:5000/api/cart');
                setCart(response.data);
            } catch (error) {
                console.error('Error updating quantity:', error);
            }
        }
    };

    const removeFromCart = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/cart/${productId}`);
            setMessage('Item removed from cart!');
            const response = await axios.get('http://localhost:5000/api/cart');
            setCart(response.data);
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <h2>Products</h2>
            <div className="products-container">
                {products.length > 0 ? products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image" 
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} // Fallback image
                        />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button className="add-to-cart" onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </div>
                )) : <p>Loading products...</p>}
            </div>

            {message && <div className="message">{message}</div>}

            <h2>Cart</h2>
            <ul className="cart-list">
                {cart.length > 0 ? cart.map(item => {
                    const product = products?.find(p => p.id === item.productId);
                    return (
                        <li key={item.productId} className="cart-item">
                            <span>{product?.name || 'Unknown Product'} - Quantity: {item.quantity}</span>
                            <div className="cart-item-buttons">
                                <button className="update-quantity" onClick={() => updateQuantity(item.productId)}>Update</button>
                                <button className="remove" onClick={() => removeFromCart(item.productId)}>Remove</button>
                            </div>
                        </li>
                    );
                }) : <p>No items in cart</p>}
            </ul>
        </div>
    );
}

export default App;
