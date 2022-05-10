import { 
    Button, 
    Image,
    Modal,
    StyleSheet,  
    TextInput, 
    View 
} from 'react-native'
import React, { useState } from 'react'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal!'
                    onChangeText={ goalInputHandler }
                    value={enteredGoalText}
                />
                <View style={ styles.buttonContainer }>
                    <View style={styles.button}>
                        <Button color='#b180f0' title='Add Goal' onPress={ addGoalHandler } />
                    </View>
                    <View style={styles.button}>
                        <Button color='#f31282' title='Cancel' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        height: 100,
        width: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 8,
        color: '#120438'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})