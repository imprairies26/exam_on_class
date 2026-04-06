import { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import ButtonComponent from '../components/ButtonComponent';
import { getCategories, getBrands } from '../data/data';

const CheckboxItem = ({ label, isChecked, onPress }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress} activeOpacity={0.7}>
        <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
            {isChecked && <AntDesign name="check" size={14} color="#fff" />}
        </View>
        <Text style={[styles.checkboxLabel, isChecked && styles.checkboxLabelChecked]}>{label}</Text>
    </TouchableOpacity>
);

export default function FilterScreens({ navigation, route }) {
    const allCategories = useMemo(() => getCategories(), []);
    const allBrands = useMemo(() => getBrands(), []);

    const existingFilters = route.params?.filters;
    const [selectedCategories, setSelectedCategories] = useState(existingFilters?.categories || []);
    const [selectedBrands, setSelectedBrands] = useState(existingFilters?.brands || []);

    const sourceScreen = route.params?.sourceScreen || 'Search';
    const query = route.params?.query;

    const toggleCategory = (cat) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const toggleBrand = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const handleApply = () => {
        const filters = { categories: selectedCategories, brands: selectedBrands };
        if (sourceScreen === 'Beverages') {
            navigation.navigate('Beverages', { filters });
        } else {
            navigation.navigate('Search', { query, filters });
        }
    };

    const handleReset = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                    <AntDesign name="close" size={24} color="#181725" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Filters</Text>
                <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                    <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                    <Text style={styles.sectionTitle}>Categories</Text>
                    {allCategories.map(cat => (
                        <CheckboxItem
                            key={cat}
                            label={cat}
                            isChecked={selectedCategories.includes(cat)}
                            onPress={() => toggleCategory(cat)}
                        />
                    ))}

                    <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Brand</Text>
                    {allBrands.map(brand => (
                        <CheckboxItem
                            key={brand}
                            label={brand}
                            isChecked={selectedBrands.includes(brand)}
                            onPress={() => toggleBrand(brand)}
                        />
                    ))}

                </ScrollView>

                <View style={styles.footer}>
                    <ButtonComponent
                        title="Apply Filter"
                        onPress={handleApply}
                    />
                </View>
            </View>
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
        paddingHorizontal: 20, 
        paddingVertical: 15, 
        backgroundColor: '#fff',
    },
    closeButton: { 
        padding: 5, 
        marginLeft: -5 
    },
    headerTitle: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#181725', 
        fontFamily: 'Gilroy' 
    },
    resetButton: { 
        padding: 5 
    },
    resetText: { 
        fontSize: 14, 
        color: '#53B175', 
        fontWeight: '600' 
    },
    contentContainer: {
        flex: 1, 
        backgroundColor: '#F2F3F2',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30, 
        paddingTop: 30,
    },
    scrollContent: { 
        paddingHorizontal: 25, 
        paddingBottom: 20 
    },
    sectionTitle: { 
        fontSize: 22, 
        fontWeight: '600', 
        color: '#181725', 
        fontFamily: 'Gilroy', 
        marginBottom: 20 
    },
    checkboxContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20 
    },
    checkbox: {
        width: 24, 
        height: 24, 
        borderRadius: 6, 
        borderWidth: 1.5, 
        borderColor: '#B3B3B3',
        alignItems: 'center', 
        justifyContent: 'center', 
        marginRight: 15,
    },
    checkboxChecked: { 
        backgroundColor: '#53B175', 
        borderColor: '#53B175' 
    },
    checkboxLabel: { 
        fontSize: 16, 
        color: '#181725', 
        fontFamily: 'Gilroy' 
    },
    checkboxLabelChecked: { 
        color: '#53B175', 
        fontWeight: '600' 
    },
    footer: { 
        paddingTop: 10 
    },
});
