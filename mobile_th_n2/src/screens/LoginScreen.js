import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SmallLogo from '../../assets/icon/small-logo.svg';
import InputComponent from '../components/InputComponent';
import PasswordComponent from '../components/PasswordComponent';
import ButtonComponent from '../components/ButtonComponent';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex1}>
                <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
                    
                    <View style={styles.logoContainer}>
                        <SmallLogo width={47} height={55} />
                    </View>

                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subtitle}>Enter your emails and password</Text>

                    <InputComponent 
                        label="Email"
                        placeholder="imshuvo97@gmail.com"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <View style={styles.passwordWrapper}>
                        <PasswordComponent 
                            label="Password"
                            placeholder="••••••••"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity style={styles.forgotBtn}>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <ButtonComponent 
                            title="Log In" 
                            onPress={() => navigation.navigate('Main')} 
                        />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don’t have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signupText}>Signup</Text>
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
    forgotBtn: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
    },
    forgotText: {
        fontSize: 14,
        color: '#181725',
        fontFamily: 'Gilroy',
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
