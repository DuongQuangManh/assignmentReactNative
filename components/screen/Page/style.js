import { StyleSheet, Text, View } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "ios" ? "10%" : 0,
  },
  header: {
    width: "100%",
    height: "7%",
    flexDirection: "row",
  },
  btnBack: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    alignSelf: "center",
    fontFamily: "Opensans_Bold",
    fontSize: 16,
  },
  img: {
    width: "100%",
    height: 250,
    backgroundColor: "white",
    position: "relative",
  },
  infodetail: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
  },
  background: {
    width: "100%",
    height: "85%",
    backgroundColor: colors.background,
    position: "absolute",
    top: 0,
  },
  avatar: {
    width: 150,
    height: 150,
    backgroundColor: colors.background,
    position: "absolute",
    bottom: 0,
    left: 15,
    borderRadius: 180,
    borderColor: "white",
    borderWidth: 5,
  },
  nameandfollower: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    padding: 10,
  },
  postandstatus: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
  },
  poststatus: {
    width: "100%",
    height: 70,
    alignItems: "center",
    paddingStart: 10,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: colors.background,
    marginTop: 10,
  },
  labelLarge: {
    fontFamily: "Opensans_Bold",
    fontSize: 18,
  },
  btnEdit: {
    width: "100%",
    height: 40,
    backgroundColor: "#e8f3ff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  containerFollow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textfl: {
    fontFamily: "Opensans_Bold",
    fontSize: 15,
  },
  textgray: {
    fontFamily: "Opensans",
    color: "gray",
  },
});

export default styles;
