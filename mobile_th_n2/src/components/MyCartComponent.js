import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

export default function MyCartComponent({ item }) {
    const { updateQuantity, removeFromCart } = useAppContext();
    const { title, subTitle, price, picture, quantity, id } = item;

    const unitPrice = parseFloat(price.replace('$', ''));
    const totalItemPrice = (unitPrice * quantity).toFixed(2);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={picture} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity style={styles.closeBtn} onPress={() => removeFromCart(id)}>
                        <AntDesign name="close" size={20} color="#B3B3B3" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>{subTitle}</Text>

                <View style={styles.bottomRow}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(id, -1)}>
                            <AntDesign name="minus" size={16} color="#B3B3B3" />
                        </TouchableOpacity>
                        <Text style={styles.qtyText}>{quantity}</Text>
                        <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(id, 1)}>
                            <AntDesign name="plus" size={16} color="#53B175" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.priceText}>${totalItemPrice}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 25,
    },
    image: { 
        width: 70, 
        height: 70 
    },
    detailsContainer: { 
        flex: 1 
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    title: { fontSize: 16,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy' 
    },
    closeBtn: { 
        padding: 5,
        marginRight: -5
    },
    subTitle: { 
        fontSize: 14,
        color: '#7C7C7C',
        fontFamily: 'Gilroy',
        marginBottom: 15
    },
    bottomRow: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qtyBtn: {
        width: 45, 
        height: 45, 
        borderRadius: 15,
        borderWidth: 1, 
        borderColor: '#E2E2E2',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff',
    },
    qtyText: {
        fontSize: 16, 
        fontWeight: '600',
        color: '#181725', 
        marginHorizontal: 15 
    },
    priceText: { 
        fontSize: 18,
        fontWeight: 'bold', 
        color: '#181725', 
        fontFamily: 'Gilroy' 
    },
});
