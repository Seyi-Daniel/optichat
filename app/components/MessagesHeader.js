import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function MessagesHeader({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>
        <Text style={{ color: colors.blue }}>Opti</Text>
        <Text style={{ color: colors.green }}>Chat</Text>
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Ionicons name="settings-outline" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 15,
  },
  buttons: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 20,
  },
});

export default MessagesHeader;
