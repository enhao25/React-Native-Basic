import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {

  // usestates always outputs 2 elements, 1st is the output, 2nd is to set state
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [ isAddMode, setIsAddMode ] = useState(false);

  const addGoalHandler = goal => {
    // ...courseGoals returns the previous array values and hence allow us to add new value to the array
    // Using the courseGoals => allows us to confirm that we are always getting the latest state before update
    setCourseGoals(courseGoals => 
      [...courseGoals, {id: Math.random().toString(), value: goal}]
    );
    setIsAddMode(false);
    // setCourseGoals([]);
    // console.log(courseGoals);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    })
  }

  const cancelGoalModal = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} cancelGoalModal={cancelGoalModal} />
      <View>
        <FlatList data={courseGoals} renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id} 
            title={itemData.item.value} 
            onDelete={() => removeGoalHandler(itemData.item.id)} 
          />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginTop: 20,
    marginBottom: 60
  }
});
