import { View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigation';
import { AppContextProvider, useAppContext } from './src/context/AppContext';
import useInactivityTimeout from './src/hooks/useInactivityTimeout';

// time for auto logout
const INACTIVITY_TIMEOUT = 60 * 1000; // 1 minute

function InactivityWrapper({ children }) {
    const { isLoggedIn, logout } = useAppContext();

    const handleTimeout = () => {
        Alert.alert(
            'Your login session has expired',
            'You not interacted for 1 minute. Please log in again.',
            [{ text: 'OK' }]
        );
        logout();
    };

    const { panHandlers } = useInactivityTimeout(
        INACTIVITY_TIMEOUT,
        handleTimeout,
        isLoggedIn
    );

    return (
        <View style={{ flex: 1 }} {...panHandlers}>
            {children}
        </View>
    );
}

export default function App() {
    return (
        <SafeAreaProvider>
            <AppContextProvider>
                <InactivityWrapper>
                    <NavigationContainer>
                        <AppNavigator />
                    </NavigationContainer>
                </InactivityWrapper>
            </AppContextProvider>
        </SafeAreaProvider>
    );
}