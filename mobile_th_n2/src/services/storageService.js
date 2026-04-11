import AsyncStorage from '@react-native-async-storage/async-storage';

// -- storages key -----------------------------------------------------
const KEYS = {
    USER: '@app_user',
    CART: '@app_cart',
    FAVOURITES: '@app_favourites',
    ORDERS: '@app_orders',
};

// -- auth -------------------------------------------------------------

export const saveUser = async (userData) => {
    try {
        const json = JSON.stringify(userData);
        await AsyncStorage.setItem(KEYS.USER, json);
    } catch (error) {
        console.error('Error saving user:', error);
    }
};

export const getUser = async () => {
    try {
        const json = await AsyncStorage.getItem(KEYS.USER);
        return json != null ? JSON.parse(json) : null;
    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
};

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem(KEYS.USER);
    } catch (error) {
        console.error('Error removing user:', error);
    }
};

// -- cart -------------------------------------------------------------

export const saveCart = async (cartItems) => {
    try {
        // loại bỏ picture vì dùng require()
        const serializableItems = cartItems.map(({ picture, ...rest }) => rest);
        const json = JSON.stringify(serializableItems);
        await AsyncStorage.setItem(KEYS.CART, json);
    } catch (error) {
        console.error('Error saving cart:', error);
    }
};

export const getCart = async () => {
    try {
        const json = await AsyncStorage.getItem(KEYS.CART);
        return json != null ? JSON.parse(json) : [];
    } catch (error) {
        console.error('Error getting cart:', error);
        return [];
    }
};

// -- favourites -------------------------------------------------------

export const saveFavourites = async (favourites) => {
    try {
        const serializableItems = favourites.map(({ picture, ...rest }) => rest);
        const json = JSON.stringify(serializableItems);
        await AsyncStorage.setItem(KEYS.FAVOURITES, json);
    } catch (error) {
        console.error('Error saving favourites:', error);
    }
};

export const getFavourites = async () => {
    try {
        const json = await AsyncStorage.getItem(KEYS.FAVOURITES);
        return json != null ? JSON.parse(json) : [];
    } catch (error) {
        console.error('Error getting favourites:', error);
        return [];
    }
};

// -- orders -----------------------------------------------------------

export const saveOrder = async (order) => {
    try {
        const existingOrders = await getOrders();
        const updatedOrders = [order, ...existingOrders]; // đưa đơn mới nhất lên trước
        const json = JSON.stringify(updatedOrders);
        await AsyncStorage.setItem(KEYS.ORDERS, json);
    } catch (error) {
        console.error('Error saving order:', error);
    }
};

export const getOrders = async () => {
    try {
        const json = await AsyncStorage.getItem(KEYS.ORDERS);
        return json != null ? JSON.parse(json) : [];
    } catch (error) {
        console.error('Error getting orders:', error);
        return [];
    }
};

// -- clear all --------------------------------------------------------

export const clearAll = async () => {
    try {
        await AsyncStorage.multiRemove([
            KEYS.USER,
            KEYS.CART,
            KEYS.FAVOURITES,
            KEYS.ORDERS,
        ]);
    } catch (error) {
        console.error('Error clearing storage:', error);
    }
};
