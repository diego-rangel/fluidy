import { StatusBar } from "expo-status-bar";
import { hoursToMinutes } from "fluidy";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your app {hoursToMinutes(3)}!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
