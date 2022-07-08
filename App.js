import { useState } from 'react'
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen'

const App = () => {

  const [userNumber, setUserNumber] = useState();

  const pickedNumHandler = (pickedNum) => {
    setUserNumber(pickedNum);
  }

  let screen = <StartGameScreen onPickNum={pickedNumHandler}/>;

  if (userNumber) {
    screen = <GameScreen />
  }
  
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          { screen }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
    backgroundImage: {
      opacity: 0.15
    }
})