import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';

export default function ErrorScreen({ visible, onClose }) {
    const navigation = useNavigation();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.popup}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                        <AntDesign name="close" size={24} color="#181725" paddingHorizontal={22} paddingTop={10}/>
                    </TouchableOpacity>

                    <View style={styles.content}>
                        <Image 
                            source={require('../../assets/pic/order-failed.png')} 
                            style={styles.image}
                            resizeMode="contain"
                        />
                        
                        <Text style={styles.title}>Oops! Order Failed</Text>
                        <Text style={styles.subText}>Something went terribly wrong.</Text>
                    </View>

                    <View style={styles.footer}>
                        <ButtonComponent 
                            title="Please Try Again" 
                            onPress={() => {}} 
                        />
                        
                        <TouchableOpacity 
                            style={styles.backButton} 
                            onPress={() => {
                                onClose();
                                navigation.navigate('Main', { screen: 'Shop' });
                            }}
                        >
                            <Text style={styles.backButtonText}>Back to home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        width: 364,
        height: 602,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingBottom: 25,
        paddingTop: 15,
        justifyContent: 'space-between',
    },
    closeButton: {
        alignSelf: 'flex-start',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    image: {
        width: 220,
        height: 220,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#181725',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 35,
    },
    subText: {
        fontSize: 16,
        color: '#7C7C7C',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 20,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
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
