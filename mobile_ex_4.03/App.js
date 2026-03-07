import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import LoginInput from './components/LoginInput'; // Nhớ kiểm tra đường dẫn file này nhé!

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
     
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>
      <View style={styles.line} />

      <LoginInput />
      
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