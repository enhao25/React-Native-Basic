import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  // usestates always outputs 2 elements, 1st is the output, 2nd is to set state
  const [ enteredGoal, setEnteredGoal ] = useState(""); 
  const [ courseGoals, setCourseGoals ] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    // ...courseGoals returns the previous array values and hence allow us to add new value to the array
    // Using the courseGoals => allows us to confirm that we are always getting the latest state before update
    setCourseGoals(courseGoals => 
      [...courseGoals, {key: Math.random().toString(), value: enteredGoal}]
    );
    // setCourseGoals([]);
    // setEnteredGoal("");
    // console.log(courseGoals);
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
        <FlatList data={courseGoals} renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>
              {itemData.item.value}
            </Text>
          </View>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginTop: 20
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
