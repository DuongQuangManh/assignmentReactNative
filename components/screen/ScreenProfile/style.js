import { Platform, StyleSheet, Text, View } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? "10%" : 0,
    backgroundColor: colors.background,
  },
  header: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    paddingStart: 10,
  },
  labelheader: {
    fontSize: 30,
    color: colors.blue,
    fontFamily: "Opensans_Bold",
  },
  labelbody: {
    fontSize: 15,
    fontFamily: "Opensans_Bold",
    padding: 5,
    color: "gray",
  },
  footer: {
    width: "100%",
    height: "100%",
  },
  page: {
    width: "95%",
    height: 70,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  setting: {
    flex: 1,
    marginTop: 10,
  },
  chucnang: {
    padding: 10,
  },
  label: {
    fontSize: 17,
    fontFamily: "Opensans",
  },
});

export default styles;
