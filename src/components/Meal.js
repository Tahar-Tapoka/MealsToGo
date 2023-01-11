import { Image, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const Meal = (props) => {
  let stars = [];
  for (let i = 0; i < props.stars; i++) {
    stars.push(<Avatar.Icon size={24} icon="star" />);
  }
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: props.uri,
        }}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.info}>{stars}</View>

          <Text style={styles.adress}>{props.adress}</Text>
        </View>
        {props.isOpen && <Avatar.Icon size={24} icon="folder" />}
        <Avatar.Icon size={24} icon={props.ifCafe ? 'coffee' : 'silverware-fork-knife'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
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

export default Meal;
