import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  blur: {
    width: "80%",
    height: 150,
    position: "absolute",
    bottom: 50,
  },
  containerLogin: {
    height: 150,
    borderRadius: 12,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnLogin: {
    width: "90%",
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnLoginAsGuest: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 10,
  },
  txtbtnLogin: {
    fontSize: 18,
    fontWeight: "300",
  },
  txtbtnLoginAsGuest: {
    fontSize: 18,
    color: "white",
    fontWeight: "300",
  },
  hello: {
    position: "absolute",
    top: 50,
  },
});

export default styles;
