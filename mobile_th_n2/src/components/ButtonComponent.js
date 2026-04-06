import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function ButtonComponent({ title, onPress, backgroundColor, icon, textColor, price = null }) {
    return (
        <TouchableOpacity 
            style={[styles.button, backgroundColor && { backgroundColor }]} 
            onPress={onPress}
        >
            <View style={styles.container}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <Text style={[styles.buttonText, textColor && { color: textColor }]}>
                    {title}
                </Text>
                {price && (
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>{price}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#53B175',
        width: '90%',
        height: 67,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    iconContainer: {
        position: 'absolute',
        left: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    priceContainer: {
        position: 'absolute',
        right: 20,
        backgroundColor: '#489E67',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
    },
    priceText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
    },
});