import { View, Text, StyleSheet, Platform, Alert } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm';
export default function LoginInput({ navigation }) {
  
  const handleValidate = (phoneNumber) => {
    const phoneRegex = /^(0[3|5|7|8|9])([0-9]{8})$/;
    if (phoneNumber.trim() === '') {
      if(Platform.OS === "web") {
        window.alert('Vui lòng không để trống số điện thoại')
      } else {
      Alert.alert('Thông báo', 'Vui lòng không để trống số điện thoại');
      }
    } else if (phoneRegex.test(phoneNumber)) {
      navigation.navigate('HomeScreen')
    } else {
      if(Platform.OS === "web") {
        window.alert('Số điện thoại không đúng định dạng. Vui lòng kiểm tra lại');
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

      <LoginForm onValidate={handleValidate} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  line: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
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