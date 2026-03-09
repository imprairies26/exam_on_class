import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView
} from 'react-native';

const SignInScreen = () => {
  //tạo state để lưu text nhập vào và state lưu lỗi
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // hàm kiểm tra định dạng số điện thoại
  const isValidPhoneNumber = (phone) => {
    // xóa dấu cách để kiểm tra
    const cleaned = phone.replace(/\s/g, '');
    const phoneRegex = /^(0)[0-9]{9}$/;
    return phoneRegex.test(cleaned);
  };

  // auto format số điện thoại
  const formatPhoneNumber = (text) => {
    //bỏ tất cả ký tự không phải là số
    const cleaned = text.replace(/\D/g, '');

    // tự format thêm dấu cách
    let formattedText = cleaned;
    if (cleaned.length > 3 && cleaned.length <= 6) {
      formattedText = `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    } else if (cleaned.length > 6) {
      formattedText = `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
    }
    return formattedText;
  };

  // xử lý khi nhập dữ liệu (real time)
  const handleChangeText = (text) => {
    const formattedPhone = formatPhoneNumber(text);
    setPhoneNumber(formattedPhone);
    const rawNumber = formattedPhone.replace(/\s/g, '');

    if (rawNumber.length > 0 && rawNumber.length < 10) {
      setError('Số điện thoại chưa đủ 10 số');
    } else if (rawNumber.length === 10 && !isValidPhoneNumber(formattedPhone)) {
      setError('Số điện thoại không hợp lệ');
    } else {
      setError('');
    }
  };

  // validate khi click tiếp tục
  const handleContinue = () => {
    if (phoneNumber.length === 0) {
      setError('Vui lòng nhập số điện thoại');
      return;
    }

    if (isValidPhoneNumber(phoneNumber)) {
      Alert.alert('Thành công', `Số điện thoại của bạn là: ${phoneNumber}`);
    } else {
      setError('Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Đăng nhập</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Nhập số điện thoại</Text>
        <Text style={styles.subtitle}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
        </Text>

        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          maxLength={12} // 10 số + 2 khoảng trắng
          value={phoneNumber}
          onChangeText={handleChangeText}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 30,
    lineHeight: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    fontSize: 16,
    paddingVertical: 8,
    color: '#000000',
  },
  inputError: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 8,
  },
  footer: {
    padding: 20,
  },
  button: {
    backgroundColor: '#0000FF',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SignInScreen;