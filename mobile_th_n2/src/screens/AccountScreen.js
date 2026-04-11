import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

import AccountComponent from '../components/AccountComponent';
import ButtonComponent from '../components/ButtonComponent';

import OrderIcon from '../../assets/icon/order-icon.svg';
import MyDetailsIcon from '../../assets/icon/my-details-icon.svg';
import DeliveryAddressIcon from '../../assets/icon/delivery-address-icon.svg';
import PaymentMethodIcon from '../../assets/icon/payment-method-icon.svg';
import PromoCordIcon from '../../assets/icon/promo-cord-icon.svg';
import BellIcon from '../../assets/icon/bell-icon.svg';
import HelpIcon from '../../assets/icon/help-icon.svg';
import AboutIcon from '../../assets/icon/about-icon.svg';
import LogoutIcon from '../../assets/icon/logout-icon.svg';

export default function AccountScreen({ navigation }) {
    const { user, logout } = useAppContext();

    const handleLogout = async () => {
        try {
            await logout();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Auth', params: { screen: 'Splash' } }],
            });
        } catch (error) {
            console.error("Error logging out", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <Image 
                    source={require('../../assets/pic/avatar.png')} 
                    style={styles.avatar} 
                />
                <View style={styles.userInfo}>
                    <View style={styles.nameRow}>
                        <Text style={styles.userName}>
                            {user?.name || 'Guest'}
                        </Text>
                        <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                            <Feather name="edit-2" size={16} color="#53B175" style={styles.editIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.userEmail}>
                        {user?.email || 'guest@example.com'}
                    </Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.topBorder} />
                
                <AccountComponent 
                    icon={OrderIcon} 
                    title="Orders" 
                    onPress={() => navigation.navigate('Orders')}
                />
                <AccountComponent icon={MyDetailsIcon} title="My Details" />
                <AccountComponent icon={DeliveryAddressIcon} title="Delivery Address" />
                <AccountComponent icon={PaymentMethodIcon} title="Payment Methods" />
                <AccountComponent icon={PromoCordIcon} title="Promo Cord" />
                <AccountComponent icon={BellIcon} title="Notifecations" />
                <AccountComponent icon={HelpIcon} title="Help" />
                <AccountComponent icon={AboutIcon} title="About" />

                <View style={styles.logoutContainer}>
                    <ButtonComponent 
                        title="Log Out" 
                        onPress={handleLogout}
                        backgroundColor="#F2F3F2"
                        textColor="#53B175"
                        icon={<LogoutIcon width={20} height={20} />}
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 30,
        paddingBottom: 30,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 20,
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#181725',
    },
    editIcon: {
        marginLeft: 10,
    },
    userEmail: {
        fontSize: 16,
        color: '#7C7C7C',
    },
    topBorder: {
        height: 1,
        backgroundColor: '#E2E2E2',
    },
    scrollContent: {
        paddingBottom: 10,
    },
    logoutContainer: {
        marginTop: 20,
    }
});
