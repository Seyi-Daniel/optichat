import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Seyi Daniel"
          subTitle="danielodunayo2001@gmail.com"
          image={require("../assets/chair.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
