import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    paddingStart: 10,
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
