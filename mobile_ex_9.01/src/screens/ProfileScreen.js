import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../App';

export default function ProfileScreen() {
    const { signOut, userEmail } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Account</Text>
            </View>
            <View style={styles.blueBanner}></View>
            <View style={styles.content}>
                <Text style={styles.name}>{userEmail}</Text>
                <Text style={styles.role}>Mobile developer</Text>
                <Text style={styles.bio}>
                    I have above 5 years of experience in native mobile apps development, now I am learning React Native
                </Text>

                <TouchableOpacity style={styles.button} onPress={signOut}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    blueBanner: {
        height: 200,
        backgroundColor: '#00b0ff',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    name: {
        fontSize: 24,
        color: '#555',
        marginBottom: 8,
    },
    role: {
        fontSize: 16,
        color: '#00b0ff',
        marginBottom: 15,
    },
    bio: {
        textAlign: 'center',
        color: '#777',
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#ffa000',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});