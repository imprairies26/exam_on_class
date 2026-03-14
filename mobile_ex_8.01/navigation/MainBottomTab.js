import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function TabIcon({ name, focused }) {
  const icons = {
    Explorer: focused ? '🏠' : '🏠',
    Account: focused ? '👤' : '👤',
  };
  return <Text style={{ fontSize: 22 }}>{icons[name]}</Text>;
}

export default function MainBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabIcon name={route.name} focused={focused} />
        ),
        tabBarActiveTintColor: '#F5A623',
        tabBarInactiveTintColor: '#aaa',
        headerShown: true,
        tabBarStyle: { height: 60, paddingBottom: 8 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
      })}
    >
      <Tab.Screen
        name="Explorer"
        component={HomeScreen}
        options={{ title: 'Explorer' }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{ title: 'Account', headerTitle: 'Account' }}
      />
    </Tab.Navigator>
  );
}
