import { StyleSheet, Text, View } from "react-native";
import colors from "../../../contains/colors";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eeeeee",
  },
  header: {
    flex: 4,
    position: "relative",
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 110,
  },
  containeredt: {
    flex: 3,
    alignItems: "center",
    position: "relative",
    marginTop: 50,
  },
  containerbtn: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  containerfooter: {
    flex: 1,
    marginBottom: 10,
  },
  edt: {
    width: "90%",
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
  forgotpass: {
    position: "absolute",
    top: 120,
    right: 30,
  },
  btn: {
    width: "80%",
    height: 45,
    backgroundColor: "#019375",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  createacc: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    flex: 1,
  },
});
export default styles;
