import { Formik } from "formik";
import { View, StyleSheet } from "react-native";
import SignInForm from "./SignInForm";
import { Card } from "react-native-paper";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  Username: yup
    .string()
    .min(4, "username must be at least 4 characters long")
    .required("username is required"),
  Password: yup
    .string()
    .min(6, "password must be at least 4 characters long")
    .required("password is required"),
});

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
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors }) => (
            <SignInForm onSubmit={handleSubmit} errors={errors} />
          )}
        </Formik>
      </Card>
    </View>
  );
};

export default SignIn;
