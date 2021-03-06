import { View, StyleSheet, Pressable } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import Text from "./Text";
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 100,
    backgroundColor: "#ecf0f1",
  },
  pressable: {
    textAlign: "center",
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    // borderWidth: 10,
    borderColor: theme.colors.primary,
    color: "white",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    padding: 23,
  },
});

const SignInForm = ({ onSubmit, errors }) => {
  const checkerror = () => {
    if (!errors.username || !errors.password) onSubmit();
  };

  return (
    <View style={styles.container}>
      <FormikTextInput name="Username" placeholder="Username" />
      <FormikTextInput name="Password" placeholder="Password" />

      <Pressable onPress={checkerror} style={styles.pressable}>
        <Text style={styles.button}>sign in</Text>
      </Pressable>
    </View>
  );
};
export default SignInForm;
