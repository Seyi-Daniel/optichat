import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import ChatScreen from "../screens/ChatScreen";
import ChatHeader from "../components/ChatHeader";
import MessagesHeader from "../components/MessagesHeader";
import MessagesScreen from "../screens/MessagesScreen";

import colors from "../config/colors";

const Stack = createStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.middle,
      },
    }}
  >
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        headerTitle: () => <MessagesHeader />,
      }}
    />
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        headerTitle: () => (
          <ChatHeader title={route.params.accountName} image />
        ),
      })}
    />
  </Stack.Navigator>
);
