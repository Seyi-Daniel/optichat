import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

import Constant from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "android" ? (
        <View style={style}>{children}</View>
      ) : (
        [children]
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constant.statusBarHeight + 20,
    //backgroundColor: "yellow",
  },
});

export default Screen;
