import { StyleSheet, Text, View } from "react-native";
import colors from "../../../contains/colors";
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  containercontent: {
    width: "100%",
    height: "100%",
    paddingTop: 60,
    backgroundColor: colors.background,
  },
  label: {
    fontSize: 30,
    color: colors.blue,
    fontFamily: "Opensans_Bold",
  },
  poststatus: {
    width: "100%",
    height: 70,
    alignItems: "center",
    paddingStart: 10,
    flexDirection: "row",
    backgroundColor: "white",
  },
});

export default styles;
