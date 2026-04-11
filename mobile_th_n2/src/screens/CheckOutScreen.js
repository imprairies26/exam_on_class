import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';
import CheckOutComponent from '../components/CheckOutComponent';
import { useAppContext } from '../context/AppContext';

export default function CheckOutScreen({ visible, onClose, cartTotal = 0 }) {
    const navigation = useNavigation();
    const { placeOrder } = useAppContext();

    const handlePlaceOrder = async () => {
        try {
            await placeOrder();
            onClose();
            navigation.navigate('OrderAccepted');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backgroundTouchable} onPress={onClose} activeOpacity={1} />
                
                <View style={styles.bottomSheet}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Checkout</Text>
                        <TouchableOpacity onPress={onClose} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                            <AntDesign name="close" size={24} color="#181725" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider} />

                    <View style={styles.content}>
                        <CheckOutComponent 
                            label="Delivery" 
                            title="Select Method" 
                            onPress={() => {}}
                        />
                        <View style={styles.divider} />
                        
                        <CheckOutComponent 
                            label="Payment" 
                            icon="credit-card"
                            onPress={() => {}}
                        />
                        <View style={styles.divider} />

                        <CheckOutComponent 
                            label="Promo Code" 
                            title="Pick discount" 
                            onPress={() => {}}
                        />
                        <View style={styles.divider} />

                        <CheckOutComponent 
                            label="Total Cost" 
                            title={`$${cartTotal.toFixed(2)}`} 
                            hideNextIcon={true}
                        />
                    </View>

                    <View style={styles.termsContainer}>
                        <Text style={styles.legalText}>By placing an order you agree to our</Text>
                        <View style={styles.termsRow}>
                            <TouchableOpacity>
                                <Text style={styles.legalLinkText}>Terms</Text>
                            </TouchableOpacity>
                            <Text style={styles.legalText}> And </Text>
                            <TouchableOpacity>
                                <Text style={styles.legalLinkText}>Conditions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <ButtonComponent 
                            title="Place Order" 
                            onPress={handlePlaceOrder} 
                        />
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
        justifyContent: 'flex-end',
    },
    backgroundTouchable: {
        flex: 1,
    },
    bottomSheet: {
        backgroundColor: '#F2F3F2',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        paddingBottom: 14,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#181725',
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E2E2',
    },
    content: {
        marginTop: 5,
    },
    termsContainer: {
        marginTop: 20,
        marginBottom: 30,
    },
    termsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    legalText: {
        fontSize: 14,
        color: '#7C7C7C',
        fontWeight: '600',
    },
    legalLinkText: {
        fontSize: 14,
        color: '#181725',
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 10,
    }
});
