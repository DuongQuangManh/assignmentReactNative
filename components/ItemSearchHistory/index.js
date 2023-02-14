import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../contains/colors";
const ItemSearchHistory = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.search(props.name);
      }}
    >
      <View style={styles.container}>
        <Icon name="history" size={20} color="gray" />
        <Text style={styles.text}>{props.name}</Text>
        <TouchableOpacity
          onPress={() => {
            props.dlt(props.name);
          }}
        >
          <Icon name="remove" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
  },
});

export default ItemSearchHistory;
