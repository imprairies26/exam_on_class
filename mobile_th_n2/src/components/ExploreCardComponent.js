import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const hexToRgba = (hex, opacity) => {
    let hexCode = hex.replace('#', '');
    if (hexCode.length === 3) {
        hexCode = hexCode.split('').map(char => char + char).join('');
    }
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default function ExploreCardComponent({ title, pic, color, onPress }) {
    const navigation = useNavigation();
    
    const handlePress = () => {
        if (onPress) onPress();
        else navigation.navigate('Beverages'); // Default action
    };
    const backgroundColor = hexToRgba(color, 0.1);
    const borderColor = hexToRgba(color, 0.7);

    return (
        <TouchableOpacity 
            style={[styles.card, { backgroundColor, borderColor }]} 
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.imageContainer}>
                <Image source={pic} style={styles.image} resizeMode="contain" />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 174,
        height: 189,
        borderRadius: 18,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 20,
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 100,
        height: 80,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
        textAlign: 'center',
        lineHeight: 22,
    }
});
