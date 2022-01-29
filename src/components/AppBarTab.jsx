import { Text, StyleSheet } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    color: theme.colors.textSecondary,
    margin: 25,
    fontWeight: theme.fontWeights.bold,
  },
  // ...
});

const AppBarTab = ({ link, tabName }) => {
  return (
    <Link to={link}>
      <Text style={styles.container}>{tabName}</Text>
    </Link>
  );
};

export default AppBarTab;
