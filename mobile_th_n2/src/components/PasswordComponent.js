import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PasswordComponent({ label, placeholder, value, onChangeText }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
                    secureTextEntry={!isPasswordVisible}
                    selectionColor="#53B175"
                />
                <TouchableOpacity 
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)} 
                    style={styles.iconContainer}
                >
                    <Ionicons 
                        name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} 
                        size={22} 
                        color="#7C7C7C" 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10, // Margin is smaller here to make room for 'Forgot Password'
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
        letterSpacing: 2, // Spaced dots slightly
    },
    iconContainer: {
        marginLeft: 10,
    }
});
