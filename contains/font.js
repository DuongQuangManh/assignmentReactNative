import { useFonts } from "expo-font";
const [fontsLoaded] = useFonts({
  Angeline: require("../../assets/Fonts/Angeline.ttf"),
});
if (!fontsLoaded) {
  return null;
}
export default {
  Angeline: require("../../assets/Fonts/Angeline.ttf"),
};
