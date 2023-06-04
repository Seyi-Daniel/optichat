import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BotTransactionScreen from "../screens/BotTransactionScreen";
import UserTransactionScreen from "../screens/UserTransactionScreen";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="BotTransaction"
        component={BotTransactionScreen}
        options={{}}
      />
      <Tab.Screen
        name="UserTransaction"
        component={UserTransactionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
