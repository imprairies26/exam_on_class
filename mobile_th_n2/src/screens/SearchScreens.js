import { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBarComponent from '../components/SearchBarComponent';
import HomeCardComponent from '../components/HomeCardComponent';
import FilterIcon from '../../assets/icon/filter-icon.svg';
import { searchProducts, applyFilter } from '../data/data';

export default function SearchScreens({ route, navigation }) {
    const initialQuery = route.params?.query || '';
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    // Filter params from FilterScreens
    const filterParams = route.params?.filters;
    const selectedCategories = filterParams?.categories || [];
    const selectedBrands = filterParams?.brands || [];

    const results = useMemo(() => {
        const searched = searchProducts(searchQuery);
        return applyFilter(searched, selectedCategories, selectedBrands);
    }, [searchQuery, selectedCategories, selectedBrands]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <SearchBarComponent
                    placeholder="Search Store"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={styles.searchBar}
                    autoFocus={true}
                />
                <TouchableOpacity
                    style={styles.filterBtn}
                    onPress={() => navigation.navigate('Filter', {
                        sourceScreen: 'Search',
                        query: searchQuery,
                        filters: filterParams,
                    })}
                >
                    <FilterIcon width={18} height={18} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                    {results.map((item) => (
                        <View key={item.id} style={styles.cardWrapper}>
                            <HomeCardComponent item={item} />
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
        backgroundColor: '#fff' 
    },
    header: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: 20, 
        marginBottom: 20, 
        paddingTop: 15,
    },
    searchBar: { 
        flex: 1, 
        width: 'auto', 
        marginBottom: 0 
    },
    filterBtn: { 
        marginLeft: 15, 
        padding: 5 
    },
    scrollContent: { 
        flexGrow: 1, 
        paddingBottom: 20 
    },
    gridContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
    },
    cardWrapper: { 
        marginBottom: 15 
    },
});
