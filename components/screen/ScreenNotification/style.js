import { StyleSheet, Text, View } from "react-native";
import colors from "../../../contains/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: "100%",
    height: 60,
    paddingStart: 10,
    backgroundColor: "white",
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default styles;
