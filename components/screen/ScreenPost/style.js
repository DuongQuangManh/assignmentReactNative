import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    widthL: "100%",
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 0.9,
  },
  btnBack: {
    position: "absolute",
    start: 10,
  },
  labelHeader: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Opensans",
  },
  btnPost: {
    width: 70,
    position: "absolute",
    end: 10,
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  txtBtn: {
    color: "white",
    fontFamily: "Opensans_Bold",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 180,
  },
  avtandname: {
    flexDirection: "row",
    padding: 5,
  },
  containerName: {
    marginStart: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    textAlignVertical: "top",
    fontSize: 18,
  },
  bottomsheet: {
    width: "100%",
    height: 250,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  itemBottomSheet: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    marginBottom: 10,
  },
});
export default styles;
