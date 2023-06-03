import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/optimus-bank-logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.tagline}>
          <Text style={{ color: colors.blue }}>Opti</Text>
          <Text style={{ color: colors.green }}>Chat</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title={"Login"}
          onPress={() => navigation.navigate("Login")}
          color="blue"
        ></AppButton>
        <AppButton
          title={"Register"}
          onPress={() => navigation.navigate("Register")}
          color="green"
        ></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {},
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center",
  },
  tagline: {
    fontSize: 45,
    fontWeight: "bold",
    paddingVertical: 25,
  },
});

export default WelcomeScreen;
