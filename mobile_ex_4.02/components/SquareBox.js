import { Text, View, StyleSheet, Image } from 'react-native';

const SquareBox = ({ namebox, color }) => {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={styles.text}>{namebox}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, 
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});

export default SquareBox;