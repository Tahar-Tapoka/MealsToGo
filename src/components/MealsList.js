import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Meal from './Meal';

const MealsList = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>List items</Text>
        <Meal
          uri={'https://i1.sndcdn.com/artworks-000023443493-0lhpft-t500x500.jpg'}
          title={'simoh'}
          adress={'Akbou'}
          stars={5}
        />
        <Meal
          uri={'https://i1.sndcdn.com/artworks-000023443493-0lhpft-t500x500.jpg'}
          title={'simoh'}
          adress={'Akbou'}
          stars={5}
          isOpen
          isCafe
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default MealsList;
