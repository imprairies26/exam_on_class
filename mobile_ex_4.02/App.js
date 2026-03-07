import React from 'react';
import { View, StyleSheet } from 'react-native';
import SquareBox from './components/SquareBox';

const App = () => {
  return (
    <View style={styles.row}>
      <SquareBox namebox="Square 1" color="#80dfff" />
      <SquareBox namebox="Square 2" color="#4dbfb4" />
      <SquareBox namebox="Square 3" color="#ff667a" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Căn giữa theo chiều dọc màn hình
    alignItems: 'center',     // Căn giữa theo chiều ngang màn hình
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',     // Sắp xếp các phần tử con theo hàng ngang
    justifyContent: 'center', // Căn giữa các ô vuông trong hàng
    alignItems: 'center',
  },
});

export default App;