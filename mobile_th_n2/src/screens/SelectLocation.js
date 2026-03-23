import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import ButtonComponent from '../components/ButtonComponent';
import GoogleMapIcon from '../../assets/icon/google-map.svg';

const { height } = Dimensions.get('window');

export default function SelectLocationScreen({ navigation }) {
    const [zone, setZone] = useState('Banasree');
    const [area, setArea] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => navigation?.goBack?.()} style={styles.backButton}>
                    <AntDesign name="left" size={24} color="#181725" />
                </TouchableOpacity>

                <View style={styles.header}>
                    <View style={styles.mapIconContainer}>
                        <GoogleMapIcon />
                    </View>
                    <Text style={styles.title}>Select Your Location</Text>
                    <Text style={styles.subtitle}>
                        Switch on your location to stay in tune with{"\n"}what's happening in your area
                    </Text>
                </View>

                {/* Dropdowns */}
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Your Zone</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={[styles.dropdownText, !zone && styles.placeholderText]}>
                            {zone ? zone : 'Types of your zone'}
                        </Text>
                        <AntDesign name="down" size={16} color="#4C4F4D" />
                    </TouchableOpacity>

                    <Text style={[styles.label, { marginTop: 30 }]}>Your Area</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={[styles.dropdownText, !area && styles.placeholderText]}>
                            {area ? area : 'Types of your area'}
                        </Text>
                        <AntDesign name="down" size={16} color="#4C4F4D" />
                    </TouchableOpacity>
                </View>

                <View style={styles.spacer} />

                {/* Submit Button */}
                <View style={styles.buttonContainer}>
                    <ButtonComponent 
                        title="Submit" 
                        onPress={() => navigation.navigate('Login')} 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginBottom: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    mapIconContainer: {
        width: 225,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30, // Khoảng cách từ ảnh Map tới Title
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        color: '#181725',
        marginBottom: 15,
        fontFamily: 'Gilroy',
    },
    subtitle: {
        fontSize: 16,
        color: '#7C7C7C',
        textAlign: 'center',
        lineHeight: 24,
        fontFamily: 'Gilroy',
    },
    formContainer: {
        width: '100%',
        marginBottom: 40,
    },
    label: {
        fontSize: 16,
        color: '#7C7C7C',
        fontWeight: '600',
        marginBottom: 10,
        fontFamily: 'Gilroy',
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingVertical: 10,
    },
    dropdownText: {
        fontSize: 18,
        color: '#181725',
        fontWeight: '500',
        fontFamily: 'Gilroy',
    },
    placeholderText: {
        color: '#B3B3B3',
    },
    spacer: {
        flex: 1,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
});
