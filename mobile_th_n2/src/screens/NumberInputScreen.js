import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from "react-native-phone-number-input";
import NextButtonComponent from '../components/NextButtonComponent';
import { AntDesign } from '@expo/vector-icons';

export default function NumberInputScreen({ navigation }) {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInputRef = useRef(null);

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

                    <Text style={styles.title}>Enter your mobile number</Text>

                    <Text style={styles.label}>Mobile Number</Text>
                    
                    <View style={styles.phoneInputContainer}>
                        <PhoneInput
                            ref={phoneInputRef}
                            defaultValue={value}
                            defaultCode="VN" // mặc định VN
                            layout="first"
                            onChangeText={(text) => setValue(text)}
                            onChangeFormattedText={(text) => setFormattedValue(text)}
                            withDarkTheme={false}
                            withShadow={false}
                            autoFocus
                            containerStyle={styles.phoneInputWrapper}
                            textContainerStyle={styles.textContainerStyle}
                            textInputProps={{
                                placeholderTextColor: '#B3B3B3',
                                selectionColor: '#53B175',
                            }}
                        />
                    </View>
                </ScrollView>

                <View style={styles.bottomRow}>
                    <NextButtonComponent 
                        icon={true}
                        onPress={() => navigation.navigate('Verification')}
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
        marginBottom: -10,
        fontFamily: 'Gilroy',
    },
    phoneInputContainer: {
        width: '100%',
    },
    phoneInputWrapper: {
        width: '100%',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    textContainerStyle: {
        paddingVertical: 0,
        backgroundColor: 'transparent',
    },
    bottomRow: {
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: 25,
        paddingBottom: 30,
    },
});
