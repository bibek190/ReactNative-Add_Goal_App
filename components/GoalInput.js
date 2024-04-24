import { View, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

export default function GoalInput({ goalsText }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const changeText = (text) => {
    setEnteredGoal(text);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goals"
        onChangeText={changeText}
      />
      <Button title="Add text" onPress={addGoalHandler} />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItem: "center",
    marginTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: " 70%",
    height: 60,
    padding: 8,
    marginRight: 2,
  },
});
