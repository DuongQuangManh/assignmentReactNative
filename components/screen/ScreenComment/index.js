import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../../contains/colors";
import { MaterialIcons } from "@expo/vector-icons";
import ItemCmt from "../../ItemCmt";
var API = require("../../../src/requestAPI");
var user = {
  image: null,
  name: "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
};

const ScreenComment = ({ navigation, route }) => {
  const item = route.params.cmt;
  const id = route.params.uID;
  const [content, setContent] = useState("");
  const [acc, setAcc] = useState(user);
  const [data, setData] = useState([]);

  const getAPI = async () => {
    const a = await API.getUserByID(id);
    setAcc(a);
    const b = await API.getComment(item.id);
    setData(b);
  };

  useEffect(() => {
    getAPI();
  }, []);
  const sendComment = () => {
    const obj = {
      avatar: acc.image,
      name: acc.name,
      content: content,
      postId: item.id,
      accountId: id,
    };
    fetch(API.api_urlcmt, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      getAPI();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          data={data}
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ItemCmt
              key={index}
              avatar={item.avatar}
              content={item.content}
              name={item.name}
            />
          )}
        />
      </View>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập comment của bạn"
          cursorColor="gray"
          autoFocus
          value={content}
          onChangeText={setContent}
          multiline
        />
        <TouchableOpacity disabled={content === ""} onPress={sendComment}>
          <MaterialIcons
            name="send"
            size={30}
            color={content === "" ? colors.background : colors.blue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenComment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  footer: {
    position: "absolute",
    width: "100%",
    height: 58,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#aaaaaa",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    width: "90%",
    height: 43,
    borderRadius: 20,
    paddingHorizontal: 12,
    backgroundColor: colors.color6,
    fontSize: 16,
  },
});
