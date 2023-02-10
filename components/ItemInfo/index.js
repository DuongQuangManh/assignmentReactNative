import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const ItemInfo = (props) => {
  return (
    <View style={styles.container}>
      <Entypo name={props.icon} size={24} color="black" />
      <Text style={styles.label}>
        {props.label} <Text style={styles.text}>{props.content}</Text>
      </Text>
    </View>
  );
};

export default ItemInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  label: {
    marginStart: 10,
    fontSize: 17,
  },
  text: {
    fontWeight: "bold",
  },
});
