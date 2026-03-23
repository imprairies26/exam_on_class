import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import SmallLogo from '../../assets/icon/small-logo.svg';
import InputComponent from '../components/InputComponent';
import PasswordComponent from '../components/PasswordComponent';
import ButtonComponent from '../components/ButtonComponent';

export default function SignUpScreen({ navigation }) {
    const [username, setUsername] = useState('Afsar Hossen Shuvo');
    const [email, setEmail] = useState('imshuvo97@gmail.com');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex1}>
                <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
                    
                    <View style={styles.logoContainer}>
                        <SmallLogo width={47} height={55} />
                    </View>

                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.subtitle}>Enter your credentials to continue</Text>

                    <InputComponent 
                        label="Username"
                        placeholder="Enter username"
                        value={username}
                        onChangeText={setUsername}
                    />

                    <InputComponent 
                        label="Email"
                        placeholder="Enter email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        rightIcon={<AntDesign name="check" size={24} color="#53B175" />}
                    />

                    <View style={styles.passwordWrapper}>
                        <PasswordComponent 
                            label="Password"
                            placeholder="••••••••"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <View style={styles.termsContainer}>
                        <Text style={styles.termsText}>
                            By continuing you agree to our{' '}
                            <Text style={styles.greenText}>Terms of Service</Text>
                            {' '}and{' '}
                            <Text style={styles.greenText}>Privacy Policy.</Text>
                        </Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <ButtonComponent 
                            title="Sign Up" 
                            onPress={() => {navigation.navigate('Login')}} 
                        />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.signupText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flex1: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingBottom: 30,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 80,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#181725',
        marginBottom: 15,
        fontFamily: 'Gilroy',
    },
    subtitle: {
        fontSize: 16,
        color: '#7C7C7C',
        marginBottom: 40,
        fontFamily: 'Gilroy',
    },
    passwordWrapper: {
        marginBottom: 10,
    },
    termsContainer: {
        marginBottom: 20,
    },
    termsText: {
        fontSize: 14,
        color: '#7C7C7C',
        fontFamily: 'Gilroy',
        lineHeight: 22,
    },
    greenText: {
        color: '#53B175',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#181725',
        fontWeight: '600',
        fontFamily: 'Gilroy',
    },
    signupText: {
        fontSize: 14,
        color: '#53B175',
        fontWeight: '600',
        fontFamily: 'Gilroy',
    },
});
