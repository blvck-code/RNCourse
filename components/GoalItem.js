import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{ color: '#ddd' }} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
              <Text style={ styles.goalText }>{ props.text }</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    pressedItem: {
        opacity: 0
    },
    goalText: {
        color: 'white'
    }
})