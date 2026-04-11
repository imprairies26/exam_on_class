import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';
import { TouchableOpacity } from 'react-native';
import { OrdersSkeleton } from '../components/SkeletonLoader';

export default function OrdersScreen({ navigation }) {
    const { orders, isLoadingOrders } = useAppContext();

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const mins = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year}  ${hours}:${mins}`;
    };

    const renderOrderItem = ({ item: order }) => (
        <View style={styles.orderCard}>
            <View style={styles.orderHeader}>
                <Text style={styles.orderId}>Order #{order.id.slice(-6)}</Text>
                <Text style={styles.orderDate}>{formatDate(order.createdAt)}</Text>
            </View>

            <View style={styles.orderDivider} />

            {order.items.map((product, index) => (
                <View key={index} style={styles.productRow}>
                    <Text style={styles.productName} numberOfLines={1}>
                        {product.title}
                    </Text>
                    <Text style={styles.productQty}>x{product.quantity}</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                </View>
            ))}

            <View style={styles.orderDivider} />

            <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>${order.total}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => navigation.goBack()}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <AntDesign name="left" size={22} color="#181725" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Orders</Text>
                <View style={styles.backBtn} />
            </View>

            <View style={styles.divider} />

            {/* skeleton loading */}
            {isLoadingOrders ? (
                <OrdersSkeleton count={3} />
            ) : orders.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <AntDesign name="inbox" size={64} color="#B3B3B3" />
                    <Text style={styles.emptyText}>No orders yet</Text>
                    <Text style={styles.emptySubText}>
                        Please add products to your cart and place an order!
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={orders}
                    renderItem={renderOrderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            )}
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
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    backBtn: {
        width: 30,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E2E2',
    },
    listContent: {
        padding: 20,
        paddingBottom: 40,
    },
    orderCard: {
        backgroundColor: '#F2F3F2',
        borderRadius: 18,
        padding: 20,
        marginBottom: 16,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    orderDate: {
        fontSize: 13,
        color: '#7C7C7C',
        fontFamily: 'Gilroy',
    },
    orderDivider: {
        height: 1,
        backgroundColor: '#E2E2E2',
        marginVertical: 10,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },
    productName: {
        flex: 1,
        fontSize: 15,
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    productQty: {
        fontSize: 14,
        color: '#7C7C7C',
        marginHorizontal: 12,
        fontFamily: 'Gilroy',
    },
    productPrice: {
        fontSize: 15,
        fontWeight: '600',
        color: '#181725',
        minWidth: 60,
        textAlign: 'right',
        fontFamily: 'Gilroy',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#53B175',
        fontFamily: 'Gilroy',
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725',
        marginTop: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    emptySubText: {
        fontSize: 14,
        color: '#7C7C7C',
        textAlign: 'center',
        lineHeight: 22,
    },
});
