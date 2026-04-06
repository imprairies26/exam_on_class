import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyCartComponent from '../components/MyCartComponent';
import ButtonComponent from '../components/ButtonComponent';
import { useAppContext } from '../context/AppContext';

export default function MyCartScreen() {
    const { cartItems, cartTotal } = useAppContext();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Cart</Text>
            </View>

            <View style={styles.divider} />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {cartItems.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Your cart is empty.</Text>
                        <Text style={styles.emptySubText}>Add products from the store to get started.</Text>
                    </View>
                ) : (
                    cartItems.map((item) => (
                        <MyCartComponent key={item.id} item={item} />
                    ))
                )}
            </ScrollView>

            <View style={styles.footer}>
                <ButtonComponent
                    title="Go to Checkout"
                    price={cartItems.length > 0 ? `$${cartTotal.toFixed(2)}` : null}
                    onPress={() => {}}
                />
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
        alignItems: 'center', 
        paddingVertical: 20 
    },
    headerTitle: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#181725', 
        fontFamily: 'Gilroy' 
    },
    divider: { 
        height: 1, 
        backgroundColor: '#E2E2E2' 
    },
    scrollContent: { 
        flexGrow: 1, 
        paddingBottom: 20
    },
    footer: { 
        paddingTop: 10, 
    },
    emptyContainer: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 80, 
        paddingHorizontal: 30 
    },
    emptyText: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#181725', 
        marginBottom: 8, 
        textAlign: 'center' 
    },
    emptySubText: { 
        fontSize: 14, 
        color: '#7C7C7C', 
        textAlign: 'center', 
        lineHeight: 22 
    },
});
