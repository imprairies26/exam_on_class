import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginInput = ({ onValidate }) => {
  const [phone, setPhone] = useState('');

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
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => onValidate(phone)}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    marginBottom: 15,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 30,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#00bfa5',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginInput;
