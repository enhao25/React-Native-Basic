import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';


const GoalInput = props => {
    
    const [ enteredGoal, setEnteredGoal ] = useState(""); 

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Course Goal" 
                style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.buttonArea}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                    <   Button title="CANCEL" color="red" onPress={props.cancelGoalModal} />
                    </View>
                </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
    input: {
        width: 300, 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '70%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;