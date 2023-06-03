import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSeperator(props) {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "90%",
    height: 1.5,
    backgroundColor: colors.dark,
    alignSelf: "center",
    opacity: 0.1,
  },
});

export default ListItemSeperator;
