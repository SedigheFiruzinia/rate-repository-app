import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  item: {
    fontSize: 32,
  },
});

const Item = ({
  fullName,
  description,
  language,
  stars,
  forks,
  reviews,
  rating,
}) => (
  <View style={styles.item}>
    <Text fontWeight="bold">full name: {fullName}</Text>
    <Text>description: {description}</Text>
    <Text>language: {language}</Text>
    <Text>stars: {stars}</Text>
    <Text>forks: {forks}</Text>
    <Text>reviews: {reviews}</Text>
    <Text>rating: {rating}</Text>
  </View>
);

const RepositoryItem = ({ item }) => (
  <Item
    fullName={item.fullName}
    description={item.description}
    language={item.language}
    stars={item.stargazersCount}
    forks={item.forksCount}
    reviews={item.reviewCount}
    rating={item.ratingAverage}
  />
);

export default RepositoryItem;
