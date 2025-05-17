import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to use cart
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component that will wrap the application
export const CartProvider = ({ children }) => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartItems, setCartItems] = useState(storedCart);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to add item to cart
    const addToCart = (productId, quantity, productData) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === productId);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { ...productData, quantity }];
            }
        });
    };

    // Function to remove item from cart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    // Function to update quantity of an item
    const updateQuantity = (productId, quantity) => {
        setCartItems((prevItems) => {
            return prevItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            );
        });
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Deriving the cart count from cartItems
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
