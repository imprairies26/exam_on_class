import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { YourInSightsCard, ProductCard } from '../components/HomeCardComponent';

import ScanIcon from '../../assets/icon/scan-icon.svg';
import CounterfeitsIcon from '../../assets/icon/counterfeits-icon.svg';
import SuccessIcon from '../../assets/icon/success-icon.svg';
import DirectoryIcon from '../../assets/icon/directory-icon.svg';
import MoreIcon from '../../assets/icon/more-icon.svg';

import Avatar from '../../assets/pic/avatar.png';
import Product1 from '../../assets/pic/product1.png';
import Product2 from '../../assets/pic/product2.png';
import Product3 from '../../assets/pic/product3.png';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>Hello 👋</Text>
            <Text style={styles.nameText}>Christie Doe</Text>
          </View>
          <Image source={Avatar} style={styles.avatar} />
        </View>

        <Text style={styles.sectionTitle}>Your Insights</Text>

        <View style={styles.insightsGrid}>
          <View style={styles.insightsRow}>
            <YourInSightsCard
              icon={<ScanIcon width={25} height={25} />}
              iconBgColor="#DBDAF7"
              title="Scan new"
              subtitle="Scanned 483"
            />
            <YourInSightsCard
              icon={<CounterfeitsIcon width={25} height={25} />}
              iconBgColor="#F6E3DB"
              title="Counterfeits"
              subtitle="Counterfeited 32"
            />
          </View>
          <View style={styles.insightsRow}>
            <YourInSightsCard
              icon={<SuccessIcon width={25} height={25} />}
              iconBgColor="#D8F3F1"
              title="Success"
              subtitle="Checkouts 8"
            />
            <YourInSightsCard
              icon={<DirectoryIcon width={25} height={25} />}
              iconBgColor="#D0EDFB"
              title="Directory"
              subtitle="History 26"
            />
          </View>
        </View>

        <View style={styles.exploreHeader}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          <TouchableOpacity>
            <MoreIcon width={24} height={24} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.exploreScroll}
        >
          <ProductCard image={Product1} />
          <ProductCard image={Product2} />
          <ProductCard image={Product3} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 24,
  },
  helloText: {
    fontFamily: 'Helvetica Now Display',
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  nameText: {
    fontFamily: 'Helvetica Now Display',
    fontSize: 14,
    fontWeight: '400',
    color: '#A0A0B0',
    marginTop: 4,
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 16,
  },
  sectionTitle: {
    fontFamily: 'Helvetica Now Display',
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 16,
  },
  insightsGrid: {
    marginBottom: 24,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  insightsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  exploreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  exploreScroll: {
    paddingRight: 20,
  },
});