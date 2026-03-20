import { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../App';

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);

    const handleLogin = () => {
        if (email && password) {
            signIn(email);
        } else {
            Alert.alert('Error', 'Please enter email and password');
        }
    };

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email ID</Text>
                    <TextInput 
                        placeholder="Enter your email here!"
                        placeholderTextColor="#aaaaaa"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        placeholder="Enter your password here!"
                        placeholderTextColor="#aaaaaa"
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Not yet a member? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 40,
        color: '#000',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fafafa',
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 14,
        color: '#000'
    },
    button: {
        backgroundColor: '#ff9800',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    footerText: {
        fontSize: 14,
        color: '#333',
    },
    signUpText: {
        fontSize: 14,
        color: '#ff9800',
        fontWeight: 'bold',
    }
});