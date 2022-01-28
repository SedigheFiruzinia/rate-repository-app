import { View, StyleSheet } from "react-native";
import Text from "./Text";

const cardBodyStyles = StyleSheet.create({
  counters: {
    paddingTop: 15,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  titles: {
    paddingVertical: 5,
    marginLeft: 10,
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
function RoundAndFix(n) {
  return Math.round(n * 10) / 10;
}
const CardBody = ({ stars, forks, reviews, rating }) => {
  return (
    <>
      <View style={cardBodyStyles.counters}>
        <Text fontWeight="bold">
          {stars >= 1000 ? RoundAndFix(stars / 1000) + "k" : stars}
        </Text>
        <Text fontWeight="bold">
          {forks >= 1000 ? RoundAndFix(forks / 1000) + "k" : forks}
        </Text>
        <Text fontWeight="bold">{reviews}</Text>
        <Text fontWeight="bold">{rating}</Text>
      </View>
      <View style={cardBodyStyles.titles}>
        <Text>stars </Text>
        <Text>forks</Text>
        <Text>reviews</Text>
        <Text>rating</Text>
      </View>
    </>
  );
};

export default CardBody;
