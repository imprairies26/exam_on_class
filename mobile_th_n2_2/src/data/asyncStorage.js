import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_KEY = '@cart_items';

// get all cart item
export async function getCartItems() {
    try {
        const jsonValue = await AsyncStorage.getItem(CART_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Error reading cart items:', e);
        return [];
    }
}

// save cart item
export async function saveCartItems(items) {
    try {
        const jsonValue = JSON.stringify(items);
        await AsyncStorage.setItem(CART_KEY, jsonValue);
    } catch (e) {
        console.error('Error saving cart items:', e);
    }
}

// add item / increse if exist
export async function addToCart(product) {
    try {
        const items = await getCartItems();
        const existingIndex = items.findIndex(item => item.id === product.id);

        if (existingIndex >= 0) {
            items[existingIndex].quantity += 1;
        } else {
            items.push({ ...product, quantity: 1 });
        }

        await saveCartItems(items);
        return items;
    } catch (e) {
        console.error('Error adding to cart:', e);
        return [];
    }
}

// update item quantity
export async function updateCartItemQuantity(productId, quantity) {
    try {
        let items = await getCartItems();

        if (quantity <= 0) {
            items = items.filter(item => item.id !== productId);
        } else {
            const index = items.findIndex(item => item.id === productId);
            if (index >= 0) {
                items[index].quantity = quantity;
            }
        }

        await saveCartItems(items);
        return items;
    } catch (e) {
        console.error('Error updating cart item:', e);
        return [];
    }
}

// remove item from cart
export async function removeFromCart(productId) {
    try {
        const items = await getCartItems();
        const filtered = items.filter(item => item.id !== productId);
        await saveCartItems(filtered);
        return filtered;
    } catch (e) {
        console.error('Error removing from cart:', e);
        return [];
    }
}

// clear cart
export async function clearCart() {
    try {
        await AsyncStorage.removeItem(CART_KEY);
    } catch (e) {
        console.error('Error clearing cart:', e);
    }
}
