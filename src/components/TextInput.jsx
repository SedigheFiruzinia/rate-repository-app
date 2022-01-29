import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  border: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
  },
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.text, style, styles.border];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
