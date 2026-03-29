import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchIcon from '../../assets/icon/search-icon.svg';
import ShopIcon from '../../assets/icon/shop-icon.svg';
import ExploreIcon from '../../assets/icon/explore-icon.svg';
import CartIcon from '../../assets/icon/cart-icon.svg';
import FavouriteIcon from '../../assets/icon/favourite-icon.svg';
import AccountIcon from '../../assets/icon/account-icon.svg';

import ExploreCardComponent from '../components/ExploreCardComponent';

export default function ExploreScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTab, setSelectedTab] = useState('Explore');

    const categories = [
        { title: "Fresh Fruits\n& Vegetable", pic: require('../../assets/pic/fruits-vegetable.png'), color: '#53B175' },
        { title: "Cooking Oil\n& Ghee", pic: require('../../assets/pic/cooking-oil-ghee.png'), color: '#F8A44C' },
        { title: "Meat & Fish", pic: require('../../assets/pic/meat-fish.png'), color: '#F7A593' },
        { title: "Bakery & Snacks", pic: require('../../assets/pic/bakery-snack.png'), color: '#D3B0E0' },
        { title: "Dairy & Eggs", pic: require('../../assets/pic/dairy-eggs.png'), color: '#FDE598' },
        { title: "Beverages", pic: require('../../assets/pic/beverages.png'), color: '#B7DFF5' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            <View style={styles.header}>
                <Text style={styles.title}>Find Products</Text>
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

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                    {categories.map((item, index) => (
                        <View key={index} style={styles.cardWrapper}>
                            <ExploreCardComponent 
                                title={item.title}
                                pic={item.pic}
                                color={item.color}
                                onPress={() => {
                                    if (item.title === 'Beverages') {
                                        navigation.navigate('Beverages');
                                    } else {
                                        navigation.navigate('Beverages'); // Mocking for all items for now
                                    }
                                }}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.bottomNavContainer}>
                <TabItem icon={<ShopIcon color={selectedTab === 'Shop' ? '#53B175' : '#181725'}/>} title="Shop" isSelected={selectedTab === 'Shop'} onSelect={() => navigation?.navigate('Home')} />
                <TabItem icon={<ExploreIcon color={selectedTab === 'Explore' ? '#53B175' : '#181725'}/>} title="Explore" isSelected={selectedTab === 'Explore'} onSelect={() => setSelectedTab('Explore')} />
                <TabItem icon={<CartIcon color={selectedTab === 'Cart' ? '#53B175' : '#181725'}/>} title="Cart" isSelected={selectedTab === 'Cart'} onSelect={() => setSelectedTab('Cart')} />
                <TabItem icon={<FavouriteIcon color={selectedTab === 'Favourite' ? '#53B175' : '#181725'}/>} title="Favourite" isSelected={selectedTab === 'Favourite'} onSelect={() => setSelectedTab('Favourite')} />
                <TabItem icon={<AccountIcon color={selectedTab === 'Account' ? '#53B175' : '#181725'}/>} title="Account" isSelected={selectedTab === 'Account'} onSelect={() => setSelectedTab('Account')} />
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
    header: {
        alignItems: 'center',
        paddingVertical: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
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
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 100, // Leave space for bottom nav
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    cardWrapper: {
        marginBottom: 15,
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
