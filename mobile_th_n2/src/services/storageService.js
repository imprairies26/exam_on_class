import AsyncStorage from '@react-native-async-storage/async-storage';

// -- storage keys -----------------------------------------------------
const KEYS = {
    USER: 'app_user', // use AsyncStorage + Base64
    CART: 'app_cart', // use AsyncStorage
    FAVOURITES: 'app_favourites', // use AsyncStorage
    ORDERS: 'app_orders', // use AsyncStorage + Base64
    LAST_ACTIVITY: 'app_last_activity', // use AsyncStorage
};

// -- encryption key for orders ----------------------------------------
const ORDERS_SECRET_KEY = 'nectar_app';

// -- helper: Base64 encode/decode ---------------------------
const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const toBase64 = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 3) {
        const a = str.charCodeAt(i);
        const b = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;
        const c = i + 2 < str.length ? str.charCodeAt(i + 2) : 0;
        result += base64Chars[a >> 2];
        result += base64Chars[((a & 3) << 4) | (b >> 4)];
        result += i + 1 < str.length ? base64Chars[((b & 15) << 2) | (c >> 6)] : '=';
        result += i + 2 < str.length ? base64Chars[c & 63] : '=';
    }
    return result;
};

const fromBase64 = (str) => {
    let result = '';
    const cleaned = str.replace(/=+$/, '');
    for (let i = 0; i < cleaned.length; i += 4) {
        const a = base64Chars.indexOf(cleaned[i]);
        const b = base64Chars.indexOf(cleaned[i + 1]);
        const c = base64Chars.indexOf(cleaned[i + 2]);
        const d = base64Chars.indexOf(cleaned[i + 3]);
        result += String.fromCharCode((a << 2) | (b >> 4));
        if (c >= 0) result += String.fromCharCode(((b & 15) << 4) | (c >> 2));
        if (d >= 0) result += String.fromCharCode(((c & 3) << 6) | d);
    }
    return result;
};

// -- encrypt / decrypt ---------------------------------------------
const encrypt = (data) => {
    const json = JSON.stringify(data);
    return toBase64(json);
};

const decrypt = (ciphertext) => {
    try {
        const decryptedStr = fromBase64(ciphertext);
        if (!decryptedStr) return null;
        return JSON.parse(decryptedStr);
    } catch {
        return null;
    }
};

// AUTH — use AsyncStorage with simple Base64
export const saveUser = async (userData) => {
    try {
        const encrypted = encrypt(userData);
        await AsyncStorage.setItem(KEYS.USER, encrypted);
        console.log('[Storage] User saved with simple base64 "encryption"');
    } catch (error) {
        console.error('Error saving user:', error);
    }
};

export const getUser = async () => {
    try {
        const encrypted = await AsyncStorage.getItem(KEYS.USER);
        if (!encrypted) return null;
        
        const decrypted = decrypt(encrypted);
        console.log('[Storage] User loaded (decrypted)');
        return decrypted;
    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
};

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem(KEYS.USER);
        console.log('[Storage] User removed');
    } catch (error) {
        console.error('Error removing user:', error);
    }
};

export const saveCart = async (cartItems) => {
    try {
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

export const saveOrder = async (order) => {
    try {
        const existingOrders = await getOrders();
        const updatedOrders = [order, ...existingOrders];
        const encrypted = encrypt(updatedOrders);
        await AsyncStorage.setItem(KEYS.ORDERS, encrypted);
        console.log('[CryptoJS] Order saved with AES encryption');
    } catch (error) {
        console.error('Error saving order (encrypted):', error);
    }
};

export const getOrders = async () => {
    try {
        const encrypted = await AsyncStorage.getItem(KEYS.ORDERS);
        if (!encrypted) return [];

        const decrypted = decrypt(encrypted);
        if (!decrypted) {
            console.warn('[CryptoJS] Failed to decrypt orders, returning empty');
            return [];
        }
        console.log('[CryptoJS] Orders loaded (decrypted)');
        return decrypted;
    } catch (error) {
        console.error('Error getting orders (encrypted):', error);
        return [];
    }
};

// auto-expire login
export const saveLastActivity = async () => {
    try {
        await AsyncStorage.setItem(KEYS.LAST_ACTIVITY, Date.now().toString());
    } catch (error) {
        console.error('Error saving last activity:', error);
    }
};

export const getLastActivity = async () => {
    try {
        const timestamp = await AsyncStorage.getItem(KEYS.LAST_ACTIVITY);
        return timestamp ? parseInt(timestamp, 10) : null;
    } catch (error) {
        console.error('Error getting last activity:', error);
        return null;
    }
};

// clear all data
export const clearAll = async () => {
    try {
        await AsyncStorage.multiRemove([
            KEYS.USER,
            KEYS.CART,
            KEYS.FAVOURITES,
            KEYS.ORDERS,
            KEYS.LAST_ACTIVITY,
        ]);
        console.log('[Storage] All data cleared');
    } catch (error) {
        console.error('Error clearing storage:', error);
    }
};

// export keys to use in useStorage
export { KEYS };
