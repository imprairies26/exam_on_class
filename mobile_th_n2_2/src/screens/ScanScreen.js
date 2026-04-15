import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackIcon from '../../assets/icon/back-icon.svg';
import PlusIcon from '../../assets/icon/plus-icon.svg';

import ScanOverlay from '../../assets/pic/scan-overlay.png';
import OrangeJuice from '../../assets/pic/orange-juice.png';
import OrangeJuicePreview from '../../assets/pic/orange-juice-preview.png';

import { addToCart } from '../data/asyncStorage';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function ScanScreen({ navigation }) {
    const handleAddToCart = async () => {
        await addToCart({
            id: 'product1',
            brand: "Lauren's",
            name: 'Orange Juice',
            price: 149,
            imageKey: 'product1',
        });
    };

    return (
        <View style={styles.container}>
            <Image
                source={OrangeJuice}
                style={styles.backgroundImage}
                resizeMode="cover"
            />

            <SafeAreaView style={styles.overlay}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <BackIcon width={20} height={20} />
                </TouchableOpacity>

                <View style={styles.scanArea}>
                    <Image
                        source={ScanOverlay}
                        style={styles.scanOverlay}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.bottomCard}>
                    <Image
                        source={OrangeJuicePreview}
                        style={styles.previewImage}
                        resizeMode="cover"
                    />
                    <View style={styles.productInfo}>
                        <Text style={styles.brandText}>Lauren's</Text>
                        <Text style={styles.productName}>Orange Juice</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={handleAddToCart}
                    >
                        <PlusIcon width={14} height={14} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8D5C0',
    },
    backgroundImage: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        top: 0,
        left: 0,
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 20,
    },
    scanArea: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    scanOverlay: {
        width: SCREEN_WIDTH * 0.75,
        height: SCREEN_WIDTH * 0.75,
    },
    bottomCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 12,
        marginHorizontal: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
    },
    previewImage: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#F8F8FB',
    },
    productInfo: {
        flex: 1,
        marginLeft: 12,
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
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#5A6CF3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});