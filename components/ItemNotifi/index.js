import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const ItemNotifi = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={require("../../assets/avt.png")} style={styles.img} />
      </View>
      <View style={styles.contents}>
        <Text style={styles.bold}>
          {props.name}
          <Text style={styles.thuong}>{" " + props.content}</Text>
        </Text>
        <Text>{props.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemNotifi;
