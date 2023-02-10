import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
const FormInput = (props) => {
  return (
    <View style={styles.edt}>
      <TextInput
        style={styles.textinput}
        placeholder={props.placeholder}
        secureTextEntry={props.placeholder === "PassWord" ? true : false}
        onChangeText={(text) => {
          props.getText(text);
        }}
      />
      <FontAwesome
        name={props.icon}
        size={24}
        color="black"
        style={styles.icon}
      />
    </View>
  );
};

export default FormInput;
