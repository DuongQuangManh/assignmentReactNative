import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  header: {
    width: "100%",
    height: 80,
    alignItems: "center",
    paddingStart: 10,
    flexDirection: "row",
  },
  content: {
    width: "100%",
    height: 40,
    padding: 5,
  },
  body: {
    width: "100%",
    height: 250,
    backgroundColor: "red",
  },
  countinter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  interactive: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  nameandtime: {
    marginStart: 10,
  },
});

export default styles;
