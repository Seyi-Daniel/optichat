import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import balance from "../api/balance";

const BalanceTab = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      const response = await balance.getBalance();
      const userBalance = response.data.data.balance;
      setData(userBalance);
    };

    getBalance();
  }, []);

  return (
    <View>
      <Text style={styles.accountBalance}> Account Balance: {data} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accountBalance: {
    color: "blue",
    height: "auto",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default BalanceTab;
