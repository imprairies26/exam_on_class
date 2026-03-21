import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

export default function CartCardComponent({ brand, title, price, imageSource, quantity, onIncrease, onDecrease }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={imageSource} style={styles.image} contentFit="contain" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.brandText}>{brand}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>₹ {price}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <TouchableOpacity style={styles.qtyBtn} onPress={onDecrease}>
          <Text style={styles.qtyBtnText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.qtyText}>{quantity}</Text>
        <TouchableOpacity style={styles.qtyBtn} onPress={onIncrease}>
          <Text style={styles.qtyBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageBox: {
    width: 70,
    height: 70,
    backgroundColor: '#f5f0e6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  image: {
    width: 40,
    height: 50,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  brandText: {
    color: '#c2c2c2',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  titleText: {
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceText: {
    color: '#f48356',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#fff3ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: {
    fontSize: 18,
    color: '#f48356',
    fontWeight: 'bold',
    lineHeight: 22,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    minWidth: 20,
    textAlign: 'center',
  }
});
