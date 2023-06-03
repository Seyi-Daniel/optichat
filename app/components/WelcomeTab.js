import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Welcome({
  firstName = "-",
  lastName = "-",
  picture = "../assets/mosh.jpg",
}) {
  return (
    <View style={styles.welcome}>
      <View>
        <Text>Welcome</Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {firstName} {lastName}
        </Text>
      </View>
      <Image source={{ uri: picture }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    borderRadius: 35,
  },
  welcome: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.light2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});

export default Welcome;
