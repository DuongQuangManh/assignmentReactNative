import { Platform, StyleSheet, Text, View } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
  },
  btn: {
    width: "13%",
    justifyContent: "center",
    alignItems: "center",
  },
  edt: {
    width: "85%",
    height: 40,
    backgroundColor: colors.background,
    borderRadius: 15,
    paddingStart: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default styles;
