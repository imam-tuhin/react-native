import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(enterText) {
    setEnteredGoalText(enterText);
  };

  function addGoalHandler() {
    //console.log(enteredGoalText);
    //setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText]);
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
            style={styles.textInput} 
            placeholder='Your Daily Goal' 
            onChangeText={goalInputHandler}
          />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>
                {goal} 
              </Text>
            </View>
            ))}
        </ScrollView> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    
  },
  goalText: {
    color: 'white',
  }
});
