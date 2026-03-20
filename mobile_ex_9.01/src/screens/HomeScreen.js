import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explorer</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        
        {/* search bar */}
        <View style={styles.searchSection}>
          <View style={styles.locationIcon}>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
          <View style={styles.searchBox}>
            <TextInput 
              placeholder="Search for meals or area" 
              style={styles.searchInput}
            />
            <Ionicons name="search-outline" size={20} color="black" />
          </View>
        </View>

        {/* top categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="filter-outline" size={16} color="#ff9800" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          <View style={styles.categoryCard}>
            <View style={[styles.categoryImg, {backgroundColor: '#e57373'}]} />
            <Text style={styles.categoryText}>Pizza</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={[styles.categoryImg, {backgroundColor: '#ffb74d'}]} />
            <Text style={styles.categoryText}>Burgers</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={[styles.categoryImg, {backgroundColor: '#81c784'}]} />
            <Text style={styles.categoryText}>Steak</Text>
          </View>
          <View style={styles.categoryCard}>
            <View style={[styles.categoryImg, {backgroundColor: '#ba68c8'}]} />
            <Text style={styles.categoryText}>Pasta</Text>
          </View>
        </ScrollView>

        {/* popular items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
          <View style={styles.popularCard}>
            <View style={[styles.popularImg, {backgroundColor: '#64b5f6'}]} />
            <View style={styles.popularInfo}>
              <Text style={styles.popularName}>Food 1</Text>
              <Text style={styles.popularSub}>By Viet Nam</Text>
              <Text style={styles.popularPrice}>1$</Text>
            </View>
          </View>
          <View style={styles.popularCard}>
            <View style={[styles.popularImg, {backgroundColor: '#4db6ac'}]} />
            <View style={styles.popularInfo}>
              <Text style={styles.popularName}>Food 2</Text>
              <Text style={styles.popularSub}>By Viet Nam</Text>
              <Text style={styles.popularPrice}>3$</Text>
            </View>
          </View>
        </ScrollView>

        {/* popular items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.popularScroll, {marginBottom: 20}]}>
          <View style={styles.popularCard}>
            <View style={[styles.popularImg, {backgroundColor: '#ff8a65'}]} />
            <View style={styles.popularInfo}>
              <Text style={styles.popularName}>Food 3</Text>
              <Text style={styles.popularSub}>By Viet Nam</Text>
              <Text style={styles.popularPrice}>4$</Text>
            </View>
          </View>
          <View style={styles.popularCard}>
            <View style={[styles.popularImg, {backgroundColor: '#aed581'}]} />
            <View style={styles.popularInfo}>
              <Text style={styles.popularName}>Food 4</Text>
              <Text style={styles.popularSub}>By Viet Nam</Text>
              <Text style={styles.popularPrice}>5$</Text>
            </View>
          </View>
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  locationIcon: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2}
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2}
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#ff9800',
    marginLeft: 5,
    fontSize: 14,
  },
  viewAllText: {
    color: '#ff9800',
    fontSize: 14,
  },
  categoryScroll: {
    marginBottom: 25,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImg: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  popularScroll: {
    marginBottom: 20,
  },
  popularCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    width: 200,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2}
  },
  popularImg: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  popularInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  popularName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  popularSub: {
    fontSize: 12,
    color: '#aaa',
  },
  popularPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});