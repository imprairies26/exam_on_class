import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import CartScreen from '../screens/CartSceen';

import ScanTabIcon from '../../assets/icon/scan-bottom-bar-icon.svg';
import HomeTabIcon from '../../assets/icon/home-bottom-bar-icon.svg';
import CartTabIcon from '../../assets/icon/cart-bottom-bar-icon.svg';
import BellTabIcon from '../../assets/icon/bell-bottom-bar-icon.svg';
import HistoryTabIcon from '../../assets/icon/history-bottom-bar-icon.svg';

function NotificationsScreen() {
  return (
    <View style={placeholderStyles.container}>
      <Text style={placeholderStyles.text}>Notifications</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={placeholderStyles.container}>
      <Text style={placeholderStyles.text}>History</Text>
    </View>
  );
}

const placeholderStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  text: { fontSize: 18, fontWeight: '600', color: '#1A1A2E' },
});

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 75,
          paddingBottom: 15,
          paddingTop: 15,
        },
        tabBarActiveTintColor: '#5A6CF3',
        tabBarInactiveTintColor: '#C0C0C0',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeTabIcon width={24} height={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color }) => <BellTabIcon width={24} height={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color }) => <ScanTabIcon width={24} height={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => <HistoryTabIcon width={24} height={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => <CartTabIcon width={24} height={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}