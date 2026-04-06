import { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import HomeCardComponent from '../components/HomeCardComponent';
import FilterIcon from '../../assets/icon/filter-icon.svg';
import { getByCategory, applyFilter } from '../data/data';

export default function BeveragesScreens({ navigation, route }) {
    const allBeverages = useMemo(() => getByCategory('Beverages'), []);
    const filterParams = route.params?.filters;
    const selectedCategories = filterParams?.categories || [];
    const selectedBrands = filterParams?.brands || [];

    const displayedItems = useMemo(
        () => applyFilter(allBeverages, selectedCategories, selectedBrands),
        [allBeverages, selectedCategories, selectedBrands]
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
                    <AntDesign name="left" size={24} color="#181725" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Beverages</Text>
                <TouchableOpacity
                    style={styles.headerIcon}
                    onPress={() => navigation.navigate('Filter', {
                        sourceScreen: 'Beverages',
                        filters: filterParams,
                    })}
                >
                    <FilterIcon width={17} height={17} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                    {displayedItems.map((item) => (
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
        justifyContent: 'space-between',
        paddingHorizontal: 25, 
        paddingVertical: 15,
        borderBottomWidth: 1, 
        borderBottomColor: '#E2E2E2',
    },
    headerIcon: {
        padding: 5 
    },
    headerTitle: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#181725', 
        fontFamily: 'Gilroy' 
    },
    scrollContent: { 
        flexGrow: 1, 
        paddingBottom: 20, 
        paddingTop: 20 
    },
    gridContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20 
    },
    cardWrapper: { 
        marginBottom: 15 
    },
});