import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})