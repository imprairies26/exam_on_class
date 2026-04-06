import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FavouriteComponent({ title, subTitle, price, picture, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={picture} style={styles.image} resizeMode="contain" />
            </View>
            
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{price}</Text>
                <AntDesign name="right" size={18} color="#181725" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    image: {
        width: 60,
        height: 60,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 14,
        color: '#7C7C7C',
        fontFamily: 'Gilroy',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
        marginRight: 15,
    },
});
