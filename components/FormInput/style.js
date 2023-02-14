import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  edt: {
    width: "95%",
    height: 45,
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    marginTop: 10,
  },
  textinput: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingStart: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    left: 10,
  },
});

export default styles;
