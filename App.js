import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  function goalInputHandler(enteredText) {
    console.log(enteredText);
  }
  const addGoalHandler = () => {};

  return (
    <View style={styles.appContainer}>
      {/* What are listed */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal !"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" />
      </View>
      {/*What are written  */}
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItem: "center",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: " 70%",
    height: 60,
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
