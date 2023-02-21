import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ItemListUser from "../../ItemListUser";
var API = require("../../../src/requestAPI");
const ScreenManager = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const getAPI = async () => {
    const a = await API.getAllUser();
    setData(a);
  };

  const handerSearch = async () => {
    const a = await API.getUserByNameNeAdmin(text);
    setData(a);
  };
  const handlerLock = (id) => {
    Alert.alert(
      "Thông báo",
      "Bạn muốn khoá/mở khoá người dùng này ?",
      [
        {
          text: "Mở khoá",
          onPress: () => {
            const obj = {
              lock: false,
            };
            fetch(API.api_url + "/" + id, {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj),
            }).then((res) => {
              if (res.status === 200) {
                alert("Khoá thành công");
              }
            });
          },
        },
        {
          text: "Khoá",
          onPress: () => {
            const obj = {
              lock: true,
            };
            fetch(API.api_url + "/" + id, {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj),
            }).then((res) => {
              if (res.status === 200) {
                alert("Khoá/Mở khoá thành công");
              }
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          placeholder="Tìm kiếm"
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={handerSearch}
          onChangeText={(text) => {
            return setText(text);
          }}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ItemListUser item={item} show={handlerLock} />;
        }}
      />
    </View>
  );
};

export default ScreenManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
  },
  input: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingStart: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
