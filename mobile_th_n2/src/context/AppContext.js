import { createContext, useContext, useState, useEffect, useRef } from 'react';
import products from '../data/data';
import * as storageService from '../services/storageService';
import useStorage from '../hooks/useStorage';

const AppContext = createContext(null);

// search full info product from id
const hydrateItems = (items) =>
    items
        .map(item => {
            const full = products.find(p => p.id === item.id);
            if (!full) return null;
            return { ...full, ...item, picture: full.picture };
        })
        .filter(Boolean);

export function AppContextProvider({ children }) {
    // -- useStorage hooks (custom hook) --------------------------------
    const {
        data: savedUser,
        isLoading: isLoadingUser,
        save: saveUserStorage,
        remove: removeUserStorage,
    } = useStorage('user', null);

    const {
        data: savedOrders,
        isLoading: isLoadingOrders,
        save: saveOrderStorage,
        refresh: refreshOrders,
    } = useStorage('orders', []);

    const {
        data: savedCart,
        isLoading: isLoadingCart,
    } = useStorage('cart', []);

    const {
        data: savedFavs,
        isLoading: isLoadingFavs,
    } = useStorage('favourites', []);

    // -- auth state ----------------------------------------------------
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // -- data state ----------------------------------------------------
    const [favourites, setFavourites] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);

    // loading total
    const isLoading = isLoadingUser || isLoadingOrders || isLoadingCart || isLoadingFavs;

    // use ref to avoid persist when not loaded yet
    const initialLoadDone = useRef(false);
    const [isAppReady, setIsAppReady] = useState(false);

    // -- restore data from useStorage when loaded ----------------
    const hasRestoredRef = useRef(false);

    useEffect(() => {
        if (!isLoading && !hasRestoredRef.current) {
            hasRestoredRef.current = true;
            if (savedUser) {
                setUser(savedUser);
                setIsLoggedIn(true);
            }
            if (savedCart && savedCart.length > 0) {
                setCartItems(hydrateItems(savedCart));
            }
            if (savedFavs && savedFavs.length > 0) {
                setFavourites(hydrateItems(savedFavs));
            }
            if (savedOrders) {
                setOrders(savedOrders);
            }
            initialLoadDone.current = true;
            setIsAppReady(true);
        }
    }, [isLoading]);

    // -- persist cart when change --------------------------------
    useEffect(() => {
        if (initialLoadDone.current) {
            storageService.saveCart(cartItems);
        }
    }, [cartItems]);

    // -- persist favourites when change --------------------------
    useEffect(() => {
        if (initialLoadDone.current) {
            storageService.saveFavourites(favourites);
        }
    }, [favourites]);

    // -- auth functions -------------------------------------------
    const login = async (email, password, name) => {
        try {
            const userData = { email, password, name: name || email.split('@')[0] };
            await saveUserStorage(userData);
            setUser(userData);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const logout = async () => {
        try {
            await storageService.clearAll();
            setUser(null);
            setIsLoggedIn(false);
            setFavourites([]);
            setCartItems([]);
            setOrders([]);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    // -- favourites -----------------------------------------------
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

    // -- cart -----------------------------------------------------
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

    // -- orders ---------------------------------------------------
    const placeOrder = async () => {
        try {
            const order = {
                id: Date.now().toString(),
                items: cartItems.map(({ id, title, price, quantity }) => ({
                    id, title, price, quantity,
                })),
                total: cartTotal.toFixed(2),
                createdAt: new Date().toISOString(),
            };

            await saveOrderStorage(order);
            setOrders(prev => [order, ...prev]);

            // clear cart
            setCartItems([]);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    // -- legacy clear (used at old version) ------------------
    const clearAppData = async () => {
        await logout();
    };

    return (
        <AppContext.Provider
            value={{
                // auth
                user,
                isLoggedIn,
                isLoading,
                isAppReady,
                isLoadingOrders,
                login,
                logout,
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
                // orders
                orders,
                placeOrder,
                // legacy
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
