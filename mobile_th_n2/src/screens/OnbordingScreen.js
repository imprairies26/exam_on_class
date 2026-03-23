import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import CarrotLogo from '../../assets/icon/small-white-logo.svg';

export default function OnbordingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <ImageBackground 
                source={require('../../assets/background/onbording.png')} 
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <View style={styles.content}>
                        <CarrotLogo style={styles.logo} />
                        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
                        <Text style={styles.subtitle}>Ger your groceries in as fast as one hour</Text>
                        <ButtonComponent 
                            title="Get Started" 
                            onPress={() => navigation.navigate('SignIn')} 
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
    },
    content: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        marginBottom: 15,
        width:48,
        height: 56,
    },
    title: {
        color: '#fff',
        fontFamily: 'Gilroy',
        fontSize: 48,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 0,
        marginBottom: 10,
        lineHeight: 56,
    },
    subtitle: {
        color: 'rgba(252, 252, 252, 0.7)',
        fontFamily: 'Gilroy-medium',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: '400',
    },
});