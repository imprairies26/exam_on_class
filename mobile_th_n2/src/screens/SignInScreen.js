import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-number-input';
import ButtonComponent from '../components/ButtonComponent';
import GoogleLogo from '../../assets/icon/google-logo.svg';
import FacebookLogo from '../../assets/icon/facebook-logo.svg';
export default function SignInScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInputRef = useRef(null);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image 
                    source={require('../../assets/background/sign-in.png')} 
                    style={styles.headerImage}
                    contentFit="cover"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>
                    
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate('NumberInput')}
                        style={styles.phoneInputContainer}
                    >
                      <PhoneInput
                        ref={phoneInputRef}
                        defaultValue={value}
                        defaultCode="VN"
                        layout="first"
                        onChangeText={(text) => setValue(text)}
                        onChangeFormattedText={(text) => setFormattedValue(text)}
                        containerStyle={{ width: '100%', backgroundColor: 'transparent' }}
                        textContainerStyle={{ paddingVertical: 0, backgroundColor: 'transparent' }}
                      />
                    </TouchableOpacity>
                    <View style={styles.socialLabelContainer}>
                        <Text style={styles.socialLabel}>Or connect with social media</Text>
                    </View>

                    <ButtonComponent 
                        title="Continue with Google" 
                        onPress={() => navigation.navigate('NumberInput')}
                        backgroundColor="#5383EC"
                        icon={<GoogleLogo width={24} height={24} />}
                    />

                    <ButtonComponent 
                        title="Continue with Facebook" 
                        onPress={() => navigation.navigate('NumberInput')}
                        backgroundColor="#4A66AC"
                        icon={<FacebookLogo width={24} height={24} />}
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
    },
    headerImage: {
        width: '100%',
        height: 381,
    },
    content: {
        paddingHorizontal: 25,
        paddingTop: 30,
        backgroundColor: '#FCFCFC',
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        color: '#030303',
        marginBottom: 30,
        lineHeight: 33,
        fontFamily: 'Gilroy',
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingBottom: 10,
        marginBottom: 40,
    },
    flagPlaceholder: {
        width: 34,
        height: 24,
        marginRight: 10,
    },
    flag: {
        width: 34,
        height: 24,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#F42A41',
    },
    yellowStar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    starText: {
        color: '#FFD100', // Vietnam flag star color
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'center',
    },
    countryCode: {
        fontSize: 18,
        color: '#030303',
        fontFamily: 'Gilroy',
    },
    phoneInput: {
        flex: 1,
        fontSize: 18,
        color: '#030303',
        fontFamily: 'Gilroy',
        paddingVertical: 5,
    },
    socialLabelContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    socialLabel: {
        fontSize: 14,
        color: '#828282',
        fontWeight: '600',
        fontFamily: 'Gilroy',
    },
});
