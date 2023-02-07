import { StyleSheet, Text, View } from "react-native";
import colors from "../../contains/colors";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eeeeee",
  },
  inner: {
    flex: 1,
  },
  header: {
    flex: 2,
    position: "relative",
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 110,
  },
  containeredt: {
    flex: 4,
    alignItems: "center",
    position: "relative",
    marginTop: 20,
  },
  containerbtn: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  btn: {
    width: "80%",
    height: 45,
    backgroundColor: "#019375",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
