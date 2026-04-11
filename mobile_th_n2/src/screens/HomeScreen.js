import { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

import SmallLogo from '../../assets/icon/small-logo.svg';
import HomeLocation from '../../assets/pic/home-location.svg';

import CategoryComponent from '../components/CategoryComponent';
import HomeCardComponent from '../components/HomeCardComponent';
import GroceriesCardComponent from '../components/GroceriesCardComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import { HomeSkeleton } from '../components/SkeletonLoader';
import { exclusiveOffers, bestSelling, groceries } from '../data/data';
import { useAppContext } from '../context/AppContext';

export default function HomeScreen({ navigation}) {
    const [searchQuery, setSearchQuery] = useState('');
    const { isLoading } = useAppContext();

    // show skeleton when loading data
    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <HomeSkeleton />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <SmallLogo width={26} height={30} style={{ marginBottom: 10 }} />
                    <HomeLocation width={162} height={22} />
                </View>

                <SearchBarComponent
                    placeholder="Search Store"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                <View style={styles.bannerContainer}>
                    <Image
                        source={require('../../assets/pic/home-banner.png')}
                        style={styles.bannerImage}
                        contentFit="cover"
                    />
                </View>

                <CategoryComponent title="Exclusive Offer">
                    {exclusiveOffers.map(item => (
                        <HomeCardComponent key={item.id} item={item} />
                    ))}
                </CategoryComponent>

                <CategoryComponent title="Best Selling">
                    {bestSelling.map(item => (
                        <HomeCardComponent key={item.id} item={item} />
                    ))}
                </CategoryComponent>

                <CategoryComponent title="Groceries">
                    {groceries.map(item => (
                        <GroceriesCardComponent
                            key={item.id}
                            title={item.title}
                            picture={item.picture}
                            backgroundColor={item.backgroundColor}
                        />
                    ))}
                </CategoryComponent>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff' 
    },
    scrollContent: { 
        flexGrow: 1, 
        paddingBottom: 80 
    },
    header: { 
        alignItems: 'center', 
        paddingTop: 10, 
        marginBottom: 20 
    },
    bannerContainer: { 
        alignItems: 'center', 
        marginBottom: 30 
    },
    bannerImage: { 
        width: 368, 
        height: 114, 
        borderRadius: 8 
    },
});