import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_KEY = '@cart_items';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load giỏ hàng từ AsyncStorage khi khởi động
  useEffect(() => {
    const loadCart = async () => {
      try {
        const stored = await AsyncStorage.getItem(CART_KEY);
        if (stored) setCartItems(JSON.parse(stored));
      } catch (e) {
        console.error('Lỗi load cart:', e);
      }
    };
    loadCart();
  }, []);

  // Lưu giỏ hàng vào AsyncStorage mỗi khi thay đổi
  const saveCart = async (items) => {
    try {
      await AsyncStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Lỗi save cart:', e);
    }
  };

  // Thêm sản phẩm vào giỏ (nếu đã có thì tăng số lượng)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      let updated;
      if (existing) {
        updated = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updated = [...prev, { ...product, quantity: 1 }];
      }
      saveCart(updated);
      return updated;
    });
  };

  // Tăng số lượng
  const increaseQty = (id) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCart(updated);
      return updated;
    });
  };

  // Giảm số lượng (về 0 thì xoá)
  const decreaseQty = (id) => {
    setCartItems((prev) => {
      const updated = prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      saveCart(updated);
      return updated;
    });
  };

  // Tính tổng giá
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
