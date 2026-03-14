import React, { useContext } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/AuthContext';

export default function LoginInput({ navigation }) {
    const { setPhoneNumber } = useContext(AuthContext);

    const handleValidate = (phone) => {
        if (!phone || phone.trim() === '') {
            Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại');
            return;
        }
        setPhoneNumber(phone);
        navigation.navigate('HomeScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <LoginForm onValidate={handleValidate} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});