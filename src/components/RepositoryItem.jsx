import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

const RepositoryItem = ({ item }) => (
  <Card style={cardStyles.container}>
    <CardHeader
      image={item.ownerAvatarUrl}
      description={item.description}
      fullName={item.fullName}
      language={item.language}
    />
    <CardBody
      stars={item.stargazersCount}
      forks={item.forksCount}
      reviews={item.reviewCount}
      rating={item.ratingAverage}
    />
  </Card>
);

export default RepositoryItem;
