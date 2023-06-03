import React, { useState } from "react";
import { StyleSheet, Image, Text, KeyboardAvoidingView } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  emailAddress: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ emailAddress, password }) => {
    const result = await authApi.login(emailAddress, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data.data);
  };

  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <Image style={styles.logo} source={require("../assets/optilogo.png")} />
        <Text style={styles.tagline}>
          <Text style={{ color: colors.blue }}>Opti</Text>
          <Text style={{ color: colors.green }}>Chat</Text>
        </Text>
        <AppForm
          initialValues={{ emailAddress: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password"
            visible={loginFailed}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="emailAddress"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" style={styles.button} />
        </AppForm>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.blue,
  },
  tagline: {
    alignSelf: "center",
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 150,
    paddingVertical: 20,
  },
});

export default LoginScreen;
