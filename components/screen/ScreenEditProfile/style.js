import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
  },
  avt: {
    width: "100%",
    height: 200,
  },
  background: { width: "100%", height: 270 },
  info: {
    width: "100%",
    height: 400,
  },
  label: {
    fontSize: 18,
    fontFamily: "Opensans_Bold",
    marginTop: 10,
  },
  anhdaidien: {
    width: 130,
    height: 130,
    borderRadius: 180,
    alignSelf: "center",
    marginTop: 20,
  },
  anhbia: {
    width: "95%",
    height: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 5,
  },
  btn: {
    width: "90%",
    height: 40,
    backgroundColor: "#e8f3ff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
});

export default styles;
