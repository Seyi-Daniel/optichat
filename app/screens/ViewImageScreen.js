import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></Image>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 35,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 35,
  },
});
