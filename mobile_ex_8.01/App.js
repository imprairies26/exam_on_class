import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider, useAppContext } from './context/AppContext';
import AuthStack from './navigation/AuthStack';
import MainBottomTab from './navigation/MainBottomTab';

function RootNavigator() {
  const { isLoggedIn } = useAppContext();
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainBottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}
