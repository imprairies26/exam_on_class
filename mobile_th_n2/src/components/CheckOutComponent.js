import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CreditCardIcon from '../../assets/icon/credit-card-icon.svg';
import NextIcon from '../../assets/icon/next-icon-black.svg';

export default function CheckOutComponent({ label, title, icon, hideNextIcon, onPress }) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress} disabled={!onPress && hideNextIcon}>
            <Text style={styles.labelText}>{label}</Text>
            <View style={styles.rightContent}>
                {icon === 'credit-card' && <CreditCardIcon width={24} height={24} />}
                {title ? <Text style={styles.titleText}>{title}</Text> : null}
                {!hideNextIcon && <NextIcon width={14} height={14} style={styles.nextIcon} />}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    labelText: {
        fontSize: 18,
        color: '#7C7C7C',
        fontWeight: '500',
    },
    rightContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 16,
        color: '#181725',
        fontWeight: '600',
        marginLeft: 10,
    },
    nextIcon: {
        marginLeft: 15,
    }
});
