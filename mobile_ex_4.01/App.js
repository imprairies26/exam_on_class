import React from 'react';
import {StyleSheet, Button, View, Text, Alert, Platform} from 'react-native';

function showAlert(message) {
  if (Platform.OS === 'web') {
    //window.alert(message);
  } else {
    Alert.alert(message);
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button onPress={showAlert("hello")} title="Say"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
