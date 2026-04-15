import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

export function YourInSightsCard({ icon, iconBgColor, title, subtitle, onPress = null }) {
    return (
        <TouchableOpacity
            style={styles.insightCard}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={[styles.iconBackground, { backgroundColor: iconBgColor }]}>
                {icon}
            </View>
            <Text style={styles.insightTitle}>{title}</Text>
            <Text style={styles.insightSubtitle}>{subtitle}</Text>
        </TouchableOpacity>
    );
}

export function ProductCard({ image, onPress = null }) {
    return (
        <TouchableOpacity
            style={styles.productCard}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Image source={image} style={styles.productImage} resizeMode="cover" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    insightCard: {
        backgroundColor: '#F8F8FB',
        width: 158,
        height: 167,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    },
    iconBackground: {
        width: 55,
        height: 55,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    insightTitle: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 16,
        fontWeight: '400',
        color: '#1A1A2E',
        marginBottom: 4,
    },
    insightSubtitle: {
        fontFamily: 'Helvetica Now Display',
        fontSize: 10,
        fontWeight: '700',
        color: '#A0A0B0',
    },
    productCard: {
        width: 127,
        height: 125,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#F8F8FB',
        marginRight: 10,
    },
    productImage: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
});