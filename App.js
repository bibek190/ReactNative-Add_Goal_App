import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* What are listed */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal !" />
        <Button title="Add Goal" />
      </View>
      {/*What are written  */}
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 10,
    marginRight: 8,
  },
});
