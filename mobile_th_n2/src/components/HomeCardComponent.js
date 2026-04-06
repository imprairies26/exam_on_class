import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AddButtonComponent from './AddButtonComponent';
import { useNavigation } from '@react-navigation/native';

export default function HomeCardComponent({ item, title, subTitle, price, onPress, picture }) {
    const navigation = useNavigation();

    const product = item || { title, subTitle, price, picture };

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => {
                if (onPress) onPress();
                else navigation.navigate('ProductDetail', product);
            }}
            activeOpacity={0.8}
        >
            <View style={styles.imageContainer}>
                <Image source={product.picture} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                    <Text style={styles.subTitle} numberOfLines={1}>{product.subTitle}</Text>
                </View>

                <View style={styles.bottomRow}>
                    <Text style={styles.priceText}>{product.price}</Text>
                    <AddButtonComponent onPress={() => {
                        if (onPress) onPress();
                        else navigation.navigate('ProductDetail', product);
                    }} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', 
        width: 173, 
        height: 248, 
        borderRadius: 18,
        borderWidth: 1, 
        borderColor: '#E2E2E2',
        paddingTop: 25, 
        paddingBottom: 15, 
        paddingHorizontal: 15, 
        justifyContent: 'space-between',
    },
    imageContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 100 
    },
    image: { 
        width: 100, 
        height: 80 
    },
    contentContainer: { 
        flex: 1, 
        justifyContent: 'flex-end' 
    },
    title: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#181725', 
        fontFamily: 'Gilroy', 
        marginBottom: 5 
    },
    subTitle: { 
        fontSize: 14, 
        color: '#7C7C7C', 
        fontFamily: 'Gilroy', 
        marginBottom: 20 
    },
    bottomRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%' 
    },
    priceText: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#181725', 
        fontFamily: 'Gilroy' 
    },
});