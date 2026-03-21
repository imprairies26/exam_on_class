import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function ProductCardComponent({ brand, title, imageSource }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} contentFit="contain" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 127,
        height: 125,
        backgroundColor: '#f8f8fb',
        borderRadius: 16,
        marginRight: 16,
        justifyContent: 'flex-end',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        contentFit: 'cover',
        hiddenOverflow: 'hidden',
    }
});
