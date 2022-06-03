import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'

const PrimaryButton = ({ children, onPress }) => {

    const pressHandler = () => {
        console.log('Pressed!')
    }


  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={({ pressed }) => 
            pressed 
                ? [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer 
        } 
        onPress={onPress}
        android_ripple={{ color: '#640233'}}
        >
            <Text style={styles.buttonText}>{ children }</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        // Android
        elevation: 2,
        //IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.5
    }
})