import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../../contains/colors";
import { Ionicons } from "@expo/vector-icons";
import ItemListUser from "../../ItemListUser";

var API = require("../../../src/requestAPI");

const ScreenListUserSearch = ({ navigation, route }) => {
  const iduser = route.params.uID;
  const [list, setList] = useState([]);
  const handerSearch = () => {
    navigation.goBack();
  };
  const getAPI = async () => {
    const a = await API.getUserByName(route.params.search);
    setList(a);
    console.log(a + "đây là list người có tên");
  };

  const handlerShow = (id) => {
    navigation.navigate("ScreenShowPage", { uIDUser: iduser, uIDSearch: id });
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btn}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handerSearch} style={{ width: "100%" }}>
          <TextInput
            style={styles.edt}
            value={route.params.search}
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
          data={list}
          renderItem={({ item }) => {
            return <ItemListUser item={item} show={handlerShow} />;
          }}
        />
      </View>
    </View>
  );
};

export default ScreenListUserSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
  },
  btn: {
    width: "13%",
    justifyContent: "center",
    alignItems: "center",
  },
  edt: {
    width: "85%",
    height: 40,
    backgroundColor: colors.background,
    borderRadius: 15,
    paddingStart: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
  },
});
