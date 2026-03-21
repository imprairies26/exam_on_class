import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCart } from '../context/CartContext';
// Sản phẩm demo được scan
const SCANNED_PRODUCT = {
  id: 'sp1',
  brand: "Lauren's",
  title: 'Orange Juice',
  price: 149,
  image: require('../../assets/orangeJuicePrv.png'),
};

export default function ScanScreen() {
  const navigation = useNavigation();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(SCANNED_PRODUCT);
    navigation.navigate('MainTabs', { screen: 'CartTab' });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/orangeJuiceWall.png')} style={styles.backgroundImage} contentFit="cover" />

      {/* back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={22} color="#333" />
      </TouchableOpacity>

      {/* scanner overlay */}
      <View style={styles.overlay}>
        <Image source={require('../../assets/scanGlass.png')} style={styles.scanGlass} contentFit="contain" />
      </View>

      {/* bottom popup card */}
      <View style={styles.bottomCard}>
        <View style={styles.productInfo}>
          <Image source={SCANNED_PRODUCT.image} style={styles.productImage} contentFit="cover" />
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.brand}>{SCANNED_PRODUCT.brand}</Text>
            <Text style={styles.title}>{SCANNED_PRODUCT.title}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5efe8',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanGlass: {
    width: 300,
    height: 300,
  },
  bottomCard: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  brand: {
    color: '#a1a1a1',
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#4e55e6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
  }
});
