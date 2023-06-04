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

function BotChatTool({ accountNo, send, tempState }) {
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

  const result = (myMessage, botMessage) => {
    const me = () => {
      send({
        id: Math.round(Math.random() * 1000),
        interaction: "Sent",
        payload: myMessage,
      });
      const bot = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        tempState({
          id: Math.round(Math.random() * 1000),
          interaction: "Received",
          payload: botMessage,
        });
      };
      bot();
    };
    me();
  };

  const me = (message) => {
    send({
      id: Math.round(Math.random() * 1000),
      interaction: "Sent",
      payload: message,
    });
  };

  const bot = (message) => {
    send({
      id: Math.round(Math.random() * 1000),
      interaction: "Received",
      payload: message,
    });
  };

  const process = (message) => {
    switch (message.payload) {
      case "1":
        //me(message.payload);
        //result1(message.payload, "This could be anything");
        result(message.payload, "This could be anything");
        break;
      case "2":
        // code block
        break;
      default:
      // code block
    }
  };

  const handleSubmit = (message, { resetForm }) => {
    if (message.payload != "") process(message);

    resetForm();
  };

  return (
    <View style={styles.container}>
      {/* <AppButton
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
      </AppButton> */}
      <Form initialValues={{ payload: "" }} onSubmit={handleSubmit}>
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

export default BotChatTool;
