import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import ItemSearchHistory from "../../ItemSearchHistory";

var Search = require("../../../src/prefab");

const ScreenSearch = ({ navigation, route }) => {
  const id = route.params.uID;
  const [textSearch, setTextSearch] = useState("");
  const [arrTextSearch, setArrTextSearch] = useState([]);
  const handerSearch = async () => {
    await Search.saveSearchHistory(textSearch, id);
    getTextSearchHistory();
    navigation.navigate("ScreenListUserSearch", {
      search: textSearch,
      uID: id,
    });
  };
  const getTextSearchHistory = async () => {
    const a = await Search.getSearchHistory(id);
    setArrTextSearch(a);
    console.log(a);
  };

  useEffect(() => {
    getTextSearchHistory();
  }, []);
  const deleteTxtSearch = async (a) => {
    await Search.removeSearchHistory(a, id);
    getTextSearchHistory();
  };
  const showTxtSearch = async (name) => {
    await Search.saveSearchHistory(name, id);
    getTextSearchHistory();
    navigation.navigate("ScreenListUserSearch", {
      search: name,
      uID: id,
    });
  };
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
        <TextInput
          style={styles.edt}
          placeholder="Tìm kiếm trên my blog"
          returnKeyType="search"
          onSubmitEditing={handerSearch}
          onChangeText={(text) => {
            return setTextSearch(text);
          }}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={arrTextSearch}
          renderItem={({ item }) => {
            return (
              <ItemSearchHistory
                name={item}
                dlt={deleteTxtSearch}
                search={showTxtSearch}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ScreenSearch;
