import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NextIcon from '../../assets/icon/next-icon.svg';

export default function NextButtonComponent({ title, onPress, backgroundColor, icon, textColor }) {
    return (
        <TouchableOpacity 
            style={[styles.button, backgroundColor && { backgroundColor }]} 
            onPress={onPress}
        >
            <View style={styles.container}>
                {icon && <View style={styles.iconContainer}><NextIcon /></View>}
                {title ? (
                    <Text style={[styles.buttonText, textColor && { color: textColor }]}>
                        {title}
                    </Text>
                ) : null}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#53B175',
        width: 67,
        height: 67,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});