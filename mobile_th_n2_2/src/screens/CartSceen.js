import { useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import ButtonComponent from '../components/ButtonComponent';
import { getCartItems, saveCartItems } from '../data/asyncStorage';

import BackIcon from '../../assets/icon/back-icon.svg';
import MinusIcon from '../../assets/icon/minus-icon.svg';
import PlusProductIcon from '../../assets/icon/plus-product-icon.svg';

import Product1 from '../../assets/pic/product1.png';
import Product2 from '../../assets/pic/product2.png';
import Product3 from '../../assets/pic/product3.png';

const productImages = {
    'product1': Product1,
    'product2': Product2,
    'product3': Product3,
};

const DEFAULT_CART = [
    { id: 'product1', brand: "Lauren's", name: 'Orange Juice', price: 149, quantity: 2, imageKey: 'product1' },
    { id: 'product2', brand: "Baskin's", name: 'Skimmed Milk', price: 129, quantity: 2, imageKey: 'product2' },
    { id: 'product3', brand: "Marley's", name: 'Aloe Vera Lotion', price: 1249, quantity: 2, imageKey: 'product3' },
];

export default function CartScreen({ navigation }) {
    const [cartItems, setCartItems] = useState([]);

    useFocusEffect(
        useCallback(() => {
            loadCart();
        }, [])
    );

    const loadCart = async () => {
        const items = await getCartItems();
        if (items.length === 0) {
            await saveCartItems(DEFAULT_CART);
            setCartItems(DEFAULT_CART);
        } else {
            setCartItems(items);
        }
    };

    const updateQuantity = async (id, delta) => {
        const updated = cartItems.map(item => {
            if (item.id === id) {
                const newQty = Math.max(0, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }).filter(item => item.quantity > 0);

        setCartItems(updated);
        await saveCartItems(updated);
    };

    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const formatPrice = (price) => {
        return price.toLocaleString('en-IN');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <BackIcon width={20} height={20} />
                </TouchableOpacity>

                <Text style={styles.title}>Your Cart 👍</Text>

                {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartCard}>
                        <Image
                            source={productImages[item.imageKey]}
                            style={styles.productImage}
                            resizeMode="cover"
                        />
                        <View style={styles.productInfo}>
                            <Text style={styles.brandText}>{item.brand}</Text>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.priceText}>₹ {item.price}</Text>
                        </View>
                        <View style={styles.quantityControls}>
                            <TouchableOpacity
                                style={styles.qtyButton}
                                onPress={() => updateQuantity(item.id, -1)}
                            >
                                <MinusIcon width={12} height={12} />
                            </TouchableOpacity>
                            <Text style={styles.qtyText}>{item.quantity}</Text>
                            <TouchableOpacity
                                style={styles.qtyButton}
                                onPress={() => updateQuantity(item.id, 1)}
                            >
                                <PlusProductIcon width={10} height={10} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalPrice}>₹ {formatPrice(getTotal())}</Text>
                </View>

                <ButtonComponent
                    title="Proceed to checkout"
                    backgroundColor="#F08F5F"
                    textColor="#FFFFFF"
                    width={335}
                    height={56}
                    onPress={() => {}}
                    style={styles.btn}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#F8F8FB',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 25,
    },
    title: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 24,
        fontWeight: '700',
        color: '#1A1A2E',
        marginBottom: 24,
    },
    cartCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#F0F0F5',
        padding: 12,
        marginBottom: 26,
    },
    productImage: {
        width: 65,
        height: 65,
        borderRadius: 12,
        backgroundColor: '#F8F8FB',
    },
    productInfo: {
        flex: 1,
        marginLeft: 14,
    },
    brandText: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 12,
        fontWeight: '400',
        color: '#A0A0B0',
        marginBottom: 2,
    },
    productName: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A2E',
        marginBottom: 4,
    },
    priceText: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 16,
        fontWeight: '700',
        color: '#F08F5F',
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    qtyButton: {
        width: 28,
        height: 28,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtyText: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A2E',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
        paddingHorizontal: 4,
    },
    totalLabel: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1A2E',
    },
    totalPrice: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 20,
        fontWeight: '700',
        color: '#F08F5F',
    },
    btn: {
        position: 'absolute',
        bottom: 42,
        alignSelf: 'center',
    }
});
