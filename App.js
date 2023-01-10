import { StatusBar as ExpoStatusBar} from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection:"column",
    marginTop:StatusBar.currentHeight
  },
  search: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    paddingLeft:5
  },
  list: {
    backgroundColor: "green",
    flex: 19,
    marginTop:2,
    padding:5
  },
});
