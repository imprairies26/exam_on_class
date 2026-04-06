import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SearchIcon from '../../assets/icon/search-icon.svg';

export default function SearchBarComponent({ placeholder, value, onChangeText, onSubmitEditing, autoFocus, style }) {
    return (
        <View style={[styles.searchBar, style]}>
            <SearchIcon width={18} height={18} style={{ marginRight: 10 }} />
            <TextInput 
                style={styles.searchInput}
                placeholder={placeholder}
                placeholderTextColor="#7C7C7C"
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                autoFocus={autoFocus}
            />
            {value && value.length > 0 && (
                <TouchableOpacity onPress={() => onChangeText('')} style={{ padding: 5 }}>
                    <AntDesign name="closecircle" size={16} color="#B3B3B3" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 50,
        borderRadius: 15,
        backgroundColor: '#F2F3F2',
        alignSelf: 'center',
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    searchInput: {
        flex: 1,
        height: 50,
        fontSize: 14,
        fontWeight: '600',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
});