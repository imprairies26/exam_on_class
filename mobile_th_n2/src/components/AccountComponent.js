import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NextIcon from '../../assets/icon/next-icon-black.svg';

export default function AccountComponent({ icon: Icon, title, onPress }) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
            <View style={styles.leftContent}>
                {Icon && <View style={styles.iconContainer}><Icon width={20} height={20} /></View>}
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <NextIcon width={14} height={14} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 30, // consistent spacing
        alignItems: 'flex-start',
        marginRight: 10,
    },
    titleText: {
        fontSize: 18,
        color: '#181725',
        fontWeight: '600',
    }
});
