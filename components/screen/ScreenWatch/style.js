import { StyleSheet, Text, View } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    paddingStart: 10,
  },
});

export default styles;
