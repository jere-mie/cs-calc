import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Calculator from './Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
  },
});
