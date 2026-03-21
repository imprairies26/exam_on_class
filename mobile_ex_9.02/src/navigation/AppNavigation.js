import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';

import HouseIcon from '../../assets/houseIcon.svg';
import BellIcon from '../../assets/bellIcon.svg';
import ScanIcon from '../../assets/scanBottomTabIcon.svg';
import HistoryIcon from '../../assets/historyIcon.svg';
import ShopCartIcon from '../../assets/shopcartIcon.svg';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import CartScreen from '../screens/CartScreen';

function PlaceholderScreen() {
  return <View style={{ flex: 1, backgroundColor: '#fcfcfc' }} />;
}

const ICON_MAP = {
  HomeTab: HouseIcon,
  NotificationTab: BellIcon,
  ScanTab: ScanIcon,
  HistoryTab: HistoryIcon,
  CartTab: ShopCartIcon,
};

const BottomTabs = createBottomTabNavigator({
  screenOptions: ({ route, navigation }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#4fa3f6',
    tabBarInactiveTintColor: '#b0b0b0',
    tabBarStyle: {
      height: 86,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      position: 'absolute',
      backgroundColor: '#fff',
      borderTopWidth: 0,
      elevation: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -5 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      paddingTop: 10,
    },
    tabBarIcon: ({ focused, color }) => {
      const IconComponent = ICON_MAP[route.name];
      const isHighlighted = route.name === 'HomeTab' || route.name === 'CartTab';

      return (
        <View style={{
          backgroundColor: focused && isHighlighted ? '#dff1fe' : 'transparent',
          padding: isHighlighted ? 10 : 0,
          borderRadius: 14,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {IconComponent && <IconComponent width={20} height={20} color={color} />}
        </View>
      );
    },
    ...(route.name === 'ScanTab' && {
      tabBarButton: (props) => (
        <TouchableOpacity
          {...props}
          activeOpacity={1}
          onPress={() => navigation.navigate('ScanScreen')}
        />
      ),
    }),
  }),
  screens: {
    HomeTab: {
      screen: HomeScreen,
    },
    NotificationTab: {
      screen: PlaceholderScreen,
    },
    ScanTab: {
      screen: PlaceholderScreen,
    },
    HistoryTab: {
      screen: PlaceholderScreen,
    },
    CartTab: {
      screen: CartScreen,
    },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    MainTabs: {
      screen: BottomTabs,
    },
    ScanScreen: {
      screen: ScanScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
