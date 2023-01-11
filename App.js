import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import MealsList from './src/components/MealsList';
import Search from './src/components/Search';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.list}>
        <MealsList />
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: 'red',
    padding: 3,
    justifyContent: 'center',
  },
  list: {
    backgroundColor: 'green',
    flex: 1,
    marginTop: 2,
    padding: 5,
  },
});
