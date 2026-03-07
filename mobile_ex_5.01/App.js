import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>{backgroundColor.toUpperCase()}</Text>
      </View>

      <View style={styles.buttonContainer}>        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'blue' }]} 
          onPress={() => changeColor('blue')}
        >
          <Text style={styles.buttonText}>BLUE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'brown' }]} 
          onPress={() => changeColor('brown')}
        >
          <Text style={styles.buttonText}>BROWN</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'yellow' }]} 
          onPress={() => changeColor('yellow')}
        >
          <Text style={[styles.buttonText, { color: '#000' }]}>YELLOW</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'red' }]} 
          onPress={() => changeColor('red')}
        >
          <Text style={styles.buttonText}>RED</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'black' }]} 
          onPress={() => changeColor('black')}
        >
          <Text style={styles.buttonText}>BLACK</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;