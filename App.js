import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* What are listed */}
      <View>
        <TextInput placeholder="Your Course Goal !" />
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
});
