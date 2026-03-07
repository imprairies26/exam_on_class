import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LoginInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      
      <Text style={styles.subText}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại 
        <Text style={styles.boldText}> OneHousing Pro</Text>
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 25,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', // Đường gạch chân mờ
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default LoginInput;