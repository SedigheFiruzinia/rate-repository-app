import { Formik } from "formik";
import { View, StyleSheet } from "react-native";
import SignInForm from "./SignInForm";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // flex: 1,
    // justifyContent: "flex-start",
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const initialValues = {
    Username: "",
    Password: "",
  };

  return (
    <View style={styles.container}>
      <Card>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      </Card>
    </View>
  );
};

export default SignIn;
