import React, { useState } from "react";
import { StyleSheet, StatusBar, View, TextInput } from "react-native";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import { AppForm, AppFormField } from "./app/components/forms";
import Card from "./app/components/Card";

export default function App() {
  return <ListingEditScreen />;
}
