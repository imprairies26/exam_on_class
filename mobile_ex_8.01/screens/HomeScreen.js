import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
    const { phoneNumber, setPhoneNumber } = useContext(AuthContext);

    const handleLogout = () => {
        setPhoneNumber('');
        navigation.navigate('LoginInput');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.text}>hello {phoneNumber}</Text>
                <Button title="Logout" onPress={handleLogout} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1fde52',
        marginBottom: 20,
    },
});