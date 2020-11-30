import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  // usestates always outputs 2 elements, 1st is the output, 2nd is to set state
  const [ enteredGoal, setEnteredGoal ] = useState(""); 
  const [ courseGoals, setCourseGoals ] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    // ...courseGoals returns the previous array values and hence allow us to add new value to the array
    // Using the currentGoals => allows us to confirm that we are always getting the latest state before update
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
    // console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    top: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: 250, 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  }
});
