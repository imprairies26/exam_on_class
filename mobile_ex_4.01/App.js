import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert, Platform } from 'react-native';
import LoginInput from './components/LoginInput';

const App = () => {
  
  const handleValidate = (phoneNumber) => {
    const phoneRegex = /^(0[3|5|7|8|9])([0-9]{8})$/;
    if (phoneNumber.trim() === '') {
      if(Platform.OS === "web") {
        window.alert('Thông báo', 'Vui lòng không để trống số điện thoại')
      } else {
      Alert.alert('Thông báo', 'Vui lòng không để trống số điện thoại');
      }
    } else if (phoneRegex.test(phoneNumber)) {
      if(Platform.OS === "web") {
        window.alert('Thành công', 'Số điện thoại hợp lệ!');
      } else {
        Alert.alert('Thành công', 'Số điện thoại hợp lệ!');
      }
    } else {
      if(Platform.OS === "web") {
        window.alert('Lỗi định dạng', 'Số điện thoại không đúng định dạng. Vui lòng kiểm tra lại');
      } else {
        Alert.alert('Lỗi định dạng', 'Số điện thoại không đúng định dạng. Vui lòng kiểm tra lại');
      }
    } 
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>
      <View style={styles.line} />

      <LoginInput onValidate={handleValidate} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
