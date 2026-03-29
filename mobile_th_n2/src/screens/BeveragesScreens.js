import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import HomeCardComponent from '../components/HomeCardComponent';
import FilterIcon from '../../assets/icon/filter-icon.svg';

export default function BeveragesScreens({ navigation }) {
    
    // Beverage mock data
    const beveragesData = [
        { title: 'Diet Coke', subTitle: '355ml, Price', price: '$1.99', picture: require('../../assets/pic/diet-coke.png') },
        { title: 'Sprite Can', subTitle: '325ml, Price', price: '$1.50', picture: require('../../assets/pic/sprite-can.png') },
        { title: 'Apple & Grape Juice', subTitle: '2L, Price', price: '$15.99', picture: require('../../assets/pic/apple-grape-juice.png') },
        { title: 'Orenge Juice', subTitle: '2L, Price', price: '$15.99', picture: require('../../assets/pic/orenge-juice.png') },
        { title: 'Coca Cola Can', subTitle: '325ml, Price', price: '$4.99', picture: require('../../assets/pic/coca-cola-can.png') },
        { title: 'Pepsi Can', subTitle: '330ml, Price', price: '$4.99', picture: require('../../assets/pic/pepsi-can.png') },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
                    <AntDesign name="left" size={24} color="#181725" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Beverages</Text>
                <TouchableOpacity style={styles.headerIcon}>
                    <FilterIcon width={17} height={17} />
                </TouchableOpacity>
            </View>

            {/* Content Array */}
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.gridContainer}>
                    {beveragesData.map((item, index) => (
                        <View key={index} style={styles.cardWrapper}>
                            <HomeCardComponent 
                                title={item.title}
                                subTitle={item.subTitle}
                                price={item.price}
                                picture={item.picture}
                                // navigation will be handled by HomeCardComponent's internal useNavigation
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    headerIcon: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
        paddingTop: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    cardWrapper: {
        marginBottom: 15,
    }
});