import React, { useState, useEffect, useContext } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import ActivityIndicator from "../components/ActivityIndicator";
import userHistoryApi from "../api/userHistory";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";

import routes from "../navigation/routes";
import AuthContext from "../auth/context";

import useApi from "../hooks/useApi";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const initialMessages = [];

function UserTransactionScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: userHistory,
    loading,
    request: loadUserHistory,
  } = useApi(userHistoryApi.getUserHistory);

  useEffect(() => {
    loadUserHistory();
  }, []);

  console.log(userHistory.data);
  return (
    <>
      <ActivityIndicator visible={loading} />
      {userHistory.data && (
        <View style={{ flex: 1 }}>
          <ListItemSeperator />
          <FlatList
            // style={{ backgroundColor: "red" }}
            data={userHistory.data}
            keyExtractor={(person) => person.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={item.firstName}
                image={{ uri: item.profilePicture }}
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {}}
          />
        </View>
      )}
    </>
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
  contactButton: {
    backgroundColor: colors.blue,
    borderRadius: 40,
    height: 75,
    left: 370,
    bottom: 40,
    position: "relative",
    width: 75,
  },
});

export default UserTransactionScreen;
