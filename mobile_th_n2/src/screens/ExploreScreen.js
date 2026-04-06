import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ExploreCardComponent from '../components/ExploreCardComponent';
import SearchBarComponent from '../components/SearchBarComponent';

export default function ExploreScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');

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

            <SearchBarComponent 
                placeholder="Search Store"
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={() => {
                    if (searchQuery.trim().length > 0) {
                        navigation.navigate('Search', { query: searchQuery });
                    }
                }}
            />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                    {categories.map((item, index) => (
                        <View key={index} style={styles.cardWrapper}>
                            <ExploreCardComponent 
                                title={item.title}
                                pic={item.pic}
                                color={item.color}
                                onPress={() => navigation.navigate('Beverages', { category: item.title })}
                            />
                        </View>
                    ))}
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
        alignItems: 'center',
        paddingVertical: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
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
});
