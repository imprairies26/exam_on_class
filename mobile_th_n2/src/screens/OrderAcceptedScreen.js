import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';

export default function OrderAcceptedScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image 
                    source={require('../../assets/pic/order-success.png')} 
                    style={styles.image}
                    resizeMode="contain"
                />
                
                <Text style={styles.title}>Your Order has been accepted</Text>
                
                <Text style={styles.subText}>
                    Your items has been placed and is on{'\n'}it's way to being processed
                </Text>
            </View>

            <View style={styles.footer}>
                <ButtonComponent 
                    title="Track Order" 
                    onPress={() => navigation.navigate('Main', { screen: 'Account', params: { screen: 'Orders' } })} 
                />
                
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.navigate('Main', { screen: 'Shop' })}
                >
                    <Text style={styles.backButtonText}>Back to home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    image: {
        width: 270,
        height: 240,
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#181725',
        textAlign: 'center',
        marginBottom: 15,
        paddingHorizontal: 20,
        lineHeight: 35,
    },
    subText: {
        fontSize: 16,
        color: '#7C7C7C',
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 10,
    },
    footer: {
        marginBottom: 40,
        width: '100%',
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginTop: 10,
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725',
    }
});
