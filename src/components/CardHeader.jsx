import { View, StyleSheet, Image, Button } from "react-native";
import Text from "./Text";
import theme from "../theme";

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    margin: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 10,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.heading,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const CardHeader = ({ image, description, fullName, language }) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image style={cardHeaderStyles.avatar} source={{ uri: image }} />
      </View>
      <View>
        <Text style={cardHeaderStyles.infoContainer}>{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <View style={cardHeaderStyles.buttonContainer}>
          <Button title={language} />
        </View>
      </View>
    </View>
  );
};

export default CardHeader;
