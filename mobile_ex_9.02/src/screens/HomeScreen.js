import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import InsightsCardComponent from '../components/InsightsCardComponent';
import ProductCardComponent from '../components/ProductCardComponent';
import ArrowIcon from '../../assets/arrowIcon.svg';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>Hello 👋</Text>
            <Text style={styles.nameText}>Christie Doe</Text>
          </View>
          <Image source={require('../../assets/avatar.png')} style={styles.profileImage} />
        </View>

        {/* Your Insights */}
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Your Insights</Text>
          <View style={styles.insightsGrid}>
            <TouchableOpacity style={{ width: '47%' }} onPress={() => navigation.navigate('ScanScreen')}>
              <InsightsCardComponent
                iconName="scanIcon"
                title="Scan new"
                description="Scanned 483"
                containerColor="#f6f6f9"
                iconBoxColor="#e0e0f3"
                iconFill="#5a5adf"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '47%' }} onPress={() => {}}>
              <InsightsCardComponent
                iconName="alertIcon"
                title="Counterfeits"
                description="Counterfeited 32"
                containerColor="#fef6f5"
                iconBoxColor="#f9dfdb"
                iconFill="#e05c44"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '47%' }} onPress={() => {}}>
              <InsightsCardComponent
                iconName="successIcon"
                title="Success"
                description="Checkouts 8"
                containerColor="#f5fbf7"
                iconBoxColor="#dbf6e3"
                iconFill="#3ab86a"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '47%' }} onPress={() => {}}>
              <InsightsCardComponent
                iconName="directoryIcon"
                title="Directory"
                description="History 26"
                containerColor="#f3f8fd"
                iconBoxColor="#daecfd"
                iconFill="#4fa3f6"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore More */}
        <View style={styles.exploreSection}>
          <View style={styles.exploreHeader}>
            <Text style={styles.sectionTitle}>Explore More</Text>
            <TouchableOpacity>
              <ArrowIcon width={22} height={22} color="#1a1a1a" />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
            <ProductCardComponent
              imageSource={require('../../assets/SP1.png')}
            />
            <ProductCardComponent
              imageSource={require('../../assets/SP2.png')}
            />
            <ProductCardComponent
              imageSource={require('../../assets/SP1.png')}
            />
            <ProductCardComponent
              imageSource={require('../../assets/SP2.png')}
            />
            <ProductCardComponent
              imageSource={require('../../assets/SP1.png')}
            />
            <ProductCardComponent
              imageSource={require('../../assets/SP2.png')}
            />
          </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 16,
    color: '#8b8b8b',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  body: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  insightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exploreSection: {
    marginTop: 10,
  },
  exploreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  arrowText: {
    fontSize: 22,
    color: '#1a1a1a',
  },
});