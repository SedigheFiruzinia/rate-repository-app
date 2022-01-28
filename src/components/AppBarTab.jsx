import { Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";
// import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    color: theme.colors.textSecondary,
    margin: 25,
    fontWeight: theme.fontWeights.bold,
  },
  // ...
});

const AppBarTab = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.container}>Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;
