import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

import SmallLogo from '../../assets/icon/small-logo.svg';
import HomeLocation from '../../assets/pic/home-location.svg';
import SearchIcon from '../../assets/icon/search-icon.svg';

import ShopIcon from '../../assets/icon/shop-icon.svg';
import ExploreIcon from '../../assets/icon/explore-icon.svg';
import CartIcon from '../../assets/icon/cart-icon.svg';
import FavouriteIcon from '../../assets/icon/favourite-icon.svg';
import AccountIcon from '../../assets/icon/account-icon.svg';

import CategoryComponent from '../components/CategoryComponent';
import HomeCardComponent from '../components/HomeCardComponent';
import GroceriesCardComponent from '../components/GroceriesCardComponent';

export default function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTab, setSelectedTab] = useState('Shop');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                
                <View style={styles.header}>
                    <SmallLogo width={26} height={30} style={{ marginBottom: 10 }} />
                    <HomeLocation width={162} height={22} />
                </View>

                <View style={styles.searchWrapper}>
                    <View style={styles.searchBar}>
                        <SearchIcon width={18} height={18} style={{ marginRight: 10 }} />
                        <TextInput 
                            style={styles.searchInput}
                            placeholder="Search Store"
                            placeholderTextColor="#7C7C7C"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                </View>

                <View style={styles.bannerContainer}>
                    <Image 
                        source={require('../../assets/pic/home-banner.png')} 
                        style={styles.bannerImage}
                        contentFit="cover"
                    />
                </View>

                <CategoryComponent title="Exclusive Offer">
                    <HomeCardComponent 
                        title="Organic Bananas"
                        subTitle="7pcs, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-banana.png')}
                    />
                    <HomeCardComponent 
                        title="Red Apple"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-apple.png')}
                    />
                    <HomeCardComponent 
                        title="Organic Bananas"
                        subTitle="7pcs, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-banana.png')}
                    />
                    <HomeCardComponent 
                        title="Red Apple"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-apple.png')}
                    />
                </CategoryComponent>

                <CategoryComponent title="Best Selling">
                    <HomeCardComponent 
                        title="Bell Pepper Red"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-chilli.png')}
                    />
                    <HomeCardComponent 
                        title="Ginger"
                        subTitle="250gm, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-ginger.png')}
                    />
                    <HomeCardComponent 
                        title="Bell Pepper Red"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-chilli.png')}
                    />
                    <HomeCardComponent 
                        title="Ginger"
                        subTitle="250gm, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-ginger.png')}
                    />
                </CategoryComponent>

                <CategoryComponent title="Groceries">
                    <GroceriesCardComponent 
                        title="Pulses"
                        picture={require('../../assets/pic/product-seeds.png')}
                        backgroundColor="#F8A44C"
                    />
                    <GroceriesCardComponent 
                        title="Rice"
                        picture={require('../../assets/pic/product-rice.png')}
                        backgroundColor="#53B175"
                    />
                    <GroceriesCardComponent 
                        title="Pulses"
                        picture={require('../../assets/pic/product-seeds.png')}
                        backgroundColor="#F8A44C"
                    />
                    <GroceriesCardComponent 
                        title="Rice"
                        picture={require('../../assets/pic/product-rice.png')}
                        backgroundColor="#53B175"
                    />
                </CategoryComponent>

                <CategoryComponent turnOnTitle={false}>
                    <HomeCardComponent 
                        title="Beef Bone"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-beef.png')}
                    />
                    <HomeCardComponent 
                        title="Broiler Chicken"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-chicken.png')}
                    />
                    <HomeCardComponent 
                        title="Beef Bone"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-beef.png')}
                    />
                    <HomeCardComponent 
                        title="Broiler Chicken"
                        subTitle="1kg, Priceg"
                        price="$4.99"
                        picture={require('../../assets/pic/product-chicken.png')}
                    />
                </CategoryComponent>
                <View style={{height: 40}} />
            </ScrollView>

            <View style={styles.bottomNavContainer}>
                <TabItem icon={<ShopIcon fill={selectedTab === 'Shop' ? '#53B175' : '#181725'}/>} title="Shop" isSelected={selectedTab === 'Shop'} onSelect={() => setSelectedTab('Shop')} />
                <TabItem icon={<ExploreIcon fill={selectedTab === 'Explore' ? '#53B175' : '#181725'}/>} title="Explore" isSelected={selectedTab === 'Explore'} onSelect={() => setSelectedTab('Explore')} />
                <TabItem icon={<CartIcon fill={selectedTab === 'Cart' ? '#53B175' : '#181725'}/>} title="Cart" isSelected={selectedTab === 'Cart'} onSelect={() => setSelectedTab('Cart')} />
                <TabItem icon={<FavouriteIcon fill={selectedTab === 'Favourite' ? '#53B175' : '#181725'}/>} title="Favourite" isSelected={selectedTab === 'Favourite'} onSelect={() => setSelectedTab('Favourite')} />
                <TabItem icon={<AccountIcon fill={selectedTab === 'Account' ? '#53B175' : '#181725'}/>} title="Account" isSelected={selectedTab === 'Account'} onSelect={() => setSelectedTab('Account')} />
            </View>
        </SafeAreaView>
    );
}

const TabItem = ({ icon, title, isSelected, onSelect }) => {
    return (
        <TouchableOpacity style={styles.tabItem} onPress={onSelect} activeOpacity={0.8}>
            {icon}
            <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 80,
    },
    header: {
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 20,
    },
    searchWrapper: {
        alignItems: 'center',
        marginBottom: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F3F2',
        width: 364,
        height: 51,
        borderRadius: 15,
        paddingHorizontal: 15,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#181725',
        fontFamily: 'Gilroy',
        fontWeight: '600',
    },
    bannerContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    bannerImage: {
        width: 368,
        height: 114,
        borderRadius: 8,
    },
    bottomCardList: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 15,
        marginTop: 10,
    },
    bottomNavContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#E2E2E2',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
    },
    tabText: {
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        color: '#181725',
        marginTop: 5,
    },
    tabTextSelected: {
        color: '#53B175',
    }
});