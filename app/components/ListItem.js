import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

import AppText from "./AppText";
import ListItemDeleteAction from "./ListItemDeleteAction";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
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
            <MaterialCommunityIcons
              color={colors.medium}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
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
