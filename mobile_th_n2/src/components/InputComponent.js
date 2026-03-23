import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputComponent({ label, placeholder, value, onChangeText, rightIcon, secureTextEntry, keyboardType }) {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#B3B3B3"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    selectionColor="#53B175"
                />
                {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30, // Distance to next field
    },
    label: {
        fontSize: 16,
        color: '#7C7C7C',
        fontWeight: '600',
        fontFamily: 'Gilroy',
        marginBottom: 10,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#181725',
        fontWeight: '500',
        fontFamily: 'Gilroy',
        paddingVertical: 0,
    },
    iconContainer: {
        marginLeft: 10,
    }
});
