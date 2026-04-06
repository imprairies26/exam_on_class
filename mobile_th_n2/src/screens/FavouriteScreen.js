import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavouriteComponent from '../components/FavouriteComponent';
import ButtonComponent from '../components/ButtonComponent';
import { useAppContext } from '../context/AppContext';

export default function FavouriteScreen() {
    const { favourites, toggleFavourite, addAllToCart } = useAppContext();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Favourite</Text>
            </View>

            <View style={styles.divider} />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {favourites.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No favourites yet.</Text>
                        <Text style={styles.emptySubText}>Tap the ♡ on any product to add it here.</Text>
                    </View>
                ) : (
                    favourites.map((item) => (
                        <FavouriteComponent
                            key={item.id}
                            title={item.title}
                            subTitle={item.subTitle}
                            price={item.price}
                            picture={item.picture}
                            onPress={() => toggleFavourite(item)}
                        />
                    ))
                )}
            </ScrollView>

            <View style={styles.footer}>
                <ButtonComponent
                    title="Add All To Cart"
                    onPress={addAllToCart}
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
