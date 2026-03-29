import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function CategoryComponent({ title, children, turnOnTitle = true }) {
    return (
        <View style={styles.container}>
            {
            turnOnTitle === true ? 
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
            </View> 
            : null
            }
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {children}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    seeAll: {
        fontSize: 16,
        color: '#53B175',
        fontWeight: '600',
        fontFamily: 'Gilroy',
    },
    scrollContent: {
        paddingHorizontal: 20,  
        gap: 15,
    }
});
