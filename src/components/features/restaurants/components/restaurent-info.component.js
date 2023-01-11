import { Image, StyleSheet, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restau',
    icon,
    photos = ['https://picsum.photos/700'],
    address = '100 some street, Akbou',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
    isCafe = true,
  } = restaurant;

  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Avatar.Icon size={24} icon="star" />);
  }
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.image} source={{ uri: photos[0] }} />
      <Card.Title title={name} />
      <Card.Content>
        <Text variant="titleLarge">{stars}</Text>
        <Avatar.Icon size={24} icon={isOpenNow ? 'folder' : 'mdiHanger '} />
        <Text variant="titleLarge">{address}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  image: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  adress: {
    fontSize: 16,
  },
  info: {
    flexDirection: 'row',
  },
});

export default RestaurantInfo;
