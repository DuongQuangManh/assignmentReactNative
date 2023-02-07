import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./style";

const IconText = (props) => {
  const [isLike, setLike] = useState(false);
  const handlerLike = () => {
    if (props.require2 === "") {
      return;
    }
    if (props.require !== "") {
      setLike(!isLike);
    }
  };
  return (
    <TouchableOpacity disabled={props.type === "small"} onPress={handlerLike}>
      <View style={styles.container}>
        <Image
          source={
            props.type === "medium"
              ? isLike
                ? props.require2
                : props.require
              : props.require
          }
          style={props.type === "small" ? styles.small : styles.medium}
        />
        <Text
          style={props.type === "small" ? styles.textSmall : styles.textMedium}
        >
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconText;
