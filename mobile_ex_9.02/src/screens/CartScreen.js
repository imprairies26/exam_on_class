import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import CartCardComponent from '../components/CartCardComponent';
import LongButtonComponent from '../components/LongButtonComponent';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
  const { cartItems, increaseQty, decreaseQty, total } = useCart();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#e05c44" />
        </TouchableOpacity>
      </View>

      <Text style={styles.pageTitle}>Your Cart 👍</Text>

      {/* cart list */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Empty shopping cart</Text>
          </View>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartCardComponent
                key={item.id}
                brand={item.brand}
                title={item.title}
                price={item.price}
                imageSource={item.image}
                quantity={item.quantity}
                onIncrease={() => increaseQty(item.id)}
                onDecrease={() => decreaseQty(item.id)}
              />
            ))}

            <View style={styles.totalContainer}>
              <Text style={styles.totalTitle}>Total</Text>
              <Text style={styles.totalPrice}>₹ {total}</Text>
            </View>

            <LongButtonComponent
              title="Proceed to checkout"
              onPress={() => {}}
              style={{ marginTop: 30 }}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    width: 45,
    height: 45,
    backgroundColor: '#fef6f5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1a1a1a',
  },
  emptyContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#b0b0b0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  totalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f48356',
  }
});
