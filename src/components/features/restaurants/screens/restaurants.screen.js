import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import MealsList from '../../../MealsList';
import Search from '../../../Search';
import RestaurantInfo from '../components/restaurent-info.component';

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};

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

export default RestaurantScreen;
