import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react';

const StartGameScreen = () => {
    const [enteredNum, setEnteredNum] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNum(enteredText)
    }
    const confirmInputHandler = () => {
        console.log('On press')
    }
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNum}
        />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        // Android 
        elevation: 4,
        // IOS 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.6
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    buttonContainer: {
        flex: 1
    }
})