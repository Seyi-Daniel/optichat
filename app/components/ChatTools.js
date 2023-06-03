import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "./AppButton";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import chatApi from "../api/chat";
import useApi from "../hooks/useApi";

function ChatTools({ accountNo, refresh }) {
  const [toggle, setToggle] = useState(false);
  const [toggleColor, setToggleColor] = useState();

  const handlePress = () => {
    if (toggle) {
      setToggle(false);
      setToggleColor(null);
    } else {
      setToggle(true);
      setToggleColor(colors.green);
    }
  };

  const handleSubmit = (message, { resetForm }) => {
    const type = toggle ? "Transaction" : "Text";
    const chat = { ...message, type };

    if (chat.payload != "") {
      chatApi.sendChat(chat);
      resetForm();
      refresh();
    }

    resetForm();
  };

  return (
    <View style={styles.container}>
      <AppButton
        style={
          toggle ? { ...styles.button, ...styles.toggleEffect } : styles.button
        }
        onPress={handlePress}
      >
        <MaterialCommunityIcons
          name="currency-ngn"
          size={30}
          color={toggleColor}
        />
      </AppButton>
      <Form
        initialValues={{ recipientNumber: accountNo, payload: "" }}
        onSubmit={handleSubmit}
      >
        {toggle ? (
          <FormField
            keyboardType="numeric"
            maxLength={10}
            name="payload"
            placeholder="Amount"
            width="67%"
          />
        ) : (
          <FormField
            multiline
            name="payload"
            numberOfLines={1}
            placeholder="Enter message"
            width="67%"
          />
        )}
        <SubmitButton style={styles.button}>
          <MaterialCommunityIcons name="send" size={30} />
        </SubmitButton>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderRadius: 40,
    height: 75,
    width: 75,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  toggleEffect: {
    borderWidth: 5,
    borderColor: colors.green,
  },
});

export default ChatTools;
