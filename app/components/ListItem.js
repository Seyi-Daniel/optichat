import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

import AppText from "./AppText";

function ListItem({ image, IconComponent, title, subTitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image source={image} style={styles.image}></Image>}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </AppText>
          )}
        </View>
        <MaterialCommunityIcons color={colors.green} name="circle" size={15} />
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "700",
  },
  subTitle: {
    color: colors.medium,
  },
});
