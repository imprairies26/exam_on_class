import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
    const [favourites, setFavourites] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // favourites ----------------------------------------------------

    const isFavourite = (id) => favourites.some(item => item.id === id);

    const toggleFavourite = (product) => {
        if (isFavourite(product.id)) {
            setFavourites(prev => prev.filter(item => item.id !== product.id));
        } else {
            setFavourites(prev => [...prev, product]);
        }
    };

    const addAllToCart = () => {
        favourites.forEach(item => addToCart(item));
    };

    // cart ----------------------------------------------------------

    const isInCart = (id) => cartItems.some(item => item.id === id);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const cartTotal = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity,
        0
    );

    const clearAppData = () => {
        setFavourites([]);
        setCartItems([]);
    };

    return (
        <AppContext.Provider
            value={{
                // favourites
                favourites,
                isFavourite,
                toggleFavourite,
                addAllToCart,
                // cart
                cartItems,
                isInCart,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartTotal,
                clearAppData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useAppContext must be used within AppContextProvider');
    return ctx;
}
