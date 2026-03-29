import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AddIcon from '../../assets/icon/add-icon.svg';

export default function AddButtonComponent({onPress, backgroundColor, icon }) {
    icon = <AddIcon/>
    return (
        <TouchableOpacity
            style={[styles.button, backgroundColor && { backgroundColor }]}
            onPress={onPress}
        >
            <View style={styles.container}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#53B175',
        width: 46,
        height: 46,
        borderRadius: 17,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});