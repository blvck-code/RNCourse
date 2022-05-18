import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StartGameScreen from './screens/StartGameScreen'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
  }
})