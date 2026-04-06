import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth Screens
import SplashScreen from '../screens/SplashScreen';
import OnbordingScreen from '../screens/OnbordingScreen';
import SignInScreen from '../screens/SignInScreen';
import NumberInputScreen from '../screens/NumberInputScreen';
import VerificationScreen from '../screens/Verification';
import SelectLocationScreen from '../screens/SelectLocation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

// Main Screens
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import BeveragesScreens from '../screens/BeveragesScreens';
import SearchScreens from '../screens/SearchScreens';
import FilterScreens from '../screens/FilterScreens';
import MyCartScreen from '../screens/MyCartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';

// Tab Icons
import ShopIcon from '../../assets/icon/shop-icon.svg';
import ExploreIcon from '../../assets/icon/explore-icon.svg';
import CartIcon from '../../assets/icon/cart-icon.svg';
import FavouriteIcon from '../../assets/icon/favourite-icon.svg';
import AccountIcon from '../../assets/icon/account-icon.svg';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const FavouriteStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeMain" component={HomeScreen} />
            <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <HomeStack.Screen name="Search" component={SearchScreens} />
            <HomeStack.Screen name="Filter" component={FilterScreens} />
        </HomeStack.Navigator>
    );
}

function ExploreStackNavigator() {
    return (
        <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
            <ExploreStack.Screen name="ExploreMain" component={ExploreScreen} />
            <ExploreStack.Screen name="Beverages" component={BeveragesScreens} />
            <ExploreStack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <ExploreStack.Screen name="Search" component={SearchScreens} />
            <ExploreStack.Screen name="Filter" component={FilterScreens} />
        </ExploreStack.Navigator>
    );
}

function CartStackNavigator() {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="MyCartMain" component={MyCartScreen} />
        </CartStack.Navigator>
    );
}

function FavouriteStackNavigator() {
    return (
        <FavouriteStack.Navigator screenOptions={{ headerShown: false }}>
            <FavouriteStack.Screen name="FavouriteMain" component={FavouriteScreen} />
        </FavouriteStack.Navigator>
    );
}

function EmptyScreen() {
    return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
}

function MainTabNavigator() {
    return (
        <MainTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#53B175',
                tabBarInactiveTintColor: '#181725',
                tabBarStyle: {
                    height: 90,
                    paddingTop: 15,
                    paddingBottom: 10,
                    borderTopWidth: 1,
                    borderTopColor: '#E2E2E2',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    elevation: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    backgroundColor: '#fff',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Gilroy',
                    fontWeight: '600',
                    marginTop: 5,
                },
                tabBarIcon: ({ color }) => {
                    if (route.name === 'Shop') return <ShopIcon width={24} height={24} fill={color} />;
                    if (route.name === 'Explore') return <ExploreIcon width={24} height={24} fill={color} />;
                    if (route.name === 'Cart') return <CartIcon width={24} height={24} fill={color} />;
                    if (route.name === 'Favourite') return <FavouriteIcon width={24} height={24} fill={color} />;
                    if (route.name === 'Account') return <AccountIcon width={24} height={24} fill={color} />;
                },
            })}
        >
            <MainTab.Screen name="Shop" component={HomeStackNavigator} />
            <MainTab.Screen name="Explore" component={ExploreStackNavigator} />
            <MainTab.Screen name="Cart" component={CartStackNavigator} />
            <MainTab.Screen name="Favourite" component={FavouriteStackNavigator} />
            <MainTab.Screen name="Account" component={EmptyScreen} />
        </MainTab.Navigator>
    );
}

function AuthStackNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Splash" component={SplashScreen} />
            <AuthStack.Screen name="Onboarding" component={OnbordingScreen} />
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="NumberInput" component={NumberInputScreen} />
            <AuthStack.Screen name="Verification" component={VerificationScreen} />
            <AuthStack.Screen name="SelectLocation" component={SelectLocationScreen} />
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        </AuthStack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Auth" component={AuthStackNavigator} />
            <RootStack.Screen name="Main" component={MainTabNavigator} />
        </RootStack.Navigator>
    );
}