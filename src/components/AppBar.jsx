import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    height: 180,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab onpress={() => {}} />
    </View>
  );
};

export default AppBar;
