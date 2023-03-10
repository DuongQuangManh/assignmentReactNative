import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ItemListUser = ({ item, show }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        show(item.id);
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
  },
});
