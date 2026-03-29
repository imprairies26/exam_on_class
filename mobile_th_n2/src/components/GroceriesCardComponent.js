import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function GroceriesCardComponent({ title, onPress, picture, backgroundColor }) {
    const getBgColorWithOpacity = (hexColor) => {
        if (hexColor === '#F8A44C') return 'rgba(248, 164, 76, 0.15)';
        if (hexColor === '#53B175') return 'rgba(83, 177, 117, 0.15)';
        return hexColor; 
    };

    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: getBgColorWithOpacity(backgroundColor) }]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.contentRow}>
                <Image source={picture} style={styles.image} resizeMode="contain" />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 248,
        height: 105,
        borderRadius: 18,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    image: {
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3E423F',
        fontFamily: 'Gilroy',
    },
});
