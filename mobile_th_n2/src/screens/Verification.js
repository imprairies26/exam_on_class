import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView, StatusBar, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButtonComponent from '../components/NextButtonComponent';
import { AntDesign } from '@expo/vector-icons';

export default function VerificationScreen({ navigation }) {
    const [code, setCode] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <KeyboardAvoidingView 
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
                    <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.backButton}>
                        <AntDesign name="left" size={24} color="#181725" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Enter your 4-digit code</Text>
                    <Text style={styles.label}>Code</Text>
                    
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            value={code}
                            onChangeText={setCode}
                            keyboardType="number-pad"
                            maxLength={4}
                            placeholder="- - - -"
                            placeholderTextColor="#7C7C7C"
                            autoFocus
                            selectionColor="#53B175"
                        />
                    </View>
                </ScrollView>

                {/* Bottom Row */}
                <View style={styles.bottomRow}>
                    <TouchableOpacity onPress={() => { }} style={styles.resendButton}>
                        <Text style={styles.resendText}>Resend Code</Text>
                    </TouchableOpacity>
                    
                    <NextButtonComponent 
                        icon={true}
                        onPress={() => navigation.navigate('SelectLocation')}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingTop: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginBottom: 30, 
    },
    title: {
        fontSize: 26,
        fontWeight: '600', 
        color: '#181725',
        marginBottom: 30,
        fontFamily: 'Gilroy',
    },
    label: {
        fontSize: 16,
        color: '#7C7C7C',
        fontWeight: '600',
        marginBottom: 10,
        fontFamily: 'Gilroy',
    },
    inputContainer: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingBottom: 5,
    },
    textInput: {
        fontSize: 24,
        color: '#181725',
        fontWeight: '500',
        letterSpacing: 2,
    },
    bottomRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingBottom: 30,
    },
    resendButton: {
        justifyContent: 'center',
        paddingVertical: 10,
    },
    resendText: {
        color: '#53B175', 
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Gilroy',
    },
});
