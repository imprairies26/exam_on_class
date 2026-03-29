import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

import SmallLogo from '../../assets/icon/small-logo.svg';
import HomeLocation from '../../assets/pic/home-location.svg';
import SearchIcon from '../../assets/icon/search-icon.svg';

import CategoryComponent from '../components/CategoryComponent';
import HomeCardComponent from '../components/HomeCardComponent';
import GroceriesCardComponent from '../components/GroceriesCardComponent';

export default function HomeScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');

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
        </SafeAreaView>
    );
}

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
});