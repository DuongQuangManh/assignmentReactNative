import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    padding: 5,
    fontSize: 14,
    fontFamily: "Opensans",
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
    paddingStart: 30,
    paddingEnd: 30,
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 5,
  },
  nameandtime: {
    marginStart: 10,
  },
  iconcontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconcontainer1: {
    width: 50,
  },
  textAction: {
    marginStart: 5,
  },
});

export default styles;
