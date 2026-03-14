import { View, Text, StyleSheet, Button } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.text}>Welcome</Text>
            </View>
            <Button title="Logout" onPress={() => {navigation.navigate('LoginInput')}} />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1fde52',
    },
});