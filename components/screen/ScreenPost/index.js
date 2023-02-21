import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { Fontisto } from "@expo/vector-icons";
import Hr from "../../Hr";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
var API = require("../../../src/requestAPI");
var obj = {
  image: null,
  name: "",
};
const ScreenPost = ({ navigation, route }) => {
  const id = route.params.uID;
  const [img_source, setimg_source] = useState(null);
  const [img_base64, setiimg_base64] = useState(null);
  const [content, setContent] = useState("");
  const [acc, setAcc] = useState(obj);

  const pickImage = async () => {
    // Đọc ảnh từ thư viện thì không cần khai báo quyền
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3], // khung view cắt ảnh
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setimg_source(result.assets[0].uri);
      // chuyển ảnh thành base64 để upload lên json
      let _uri = result.assets[0].uri; // địa chỉ file ảnh đã chọn
      let file_ext = _uri.substring(_uri.lastIndexOf(".") + 1);

      FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: "base64",
      }).then((res) => {
        setiimg_base64("data:image/" + file_ext + ";base64," + res);
        console.log(img_base64);
      });
    }
  };

  const getAPI = async () => {
    const a = await API.getUserByID(id);
    setAcc(a);
  };

  const handlerPost = () => {
    const obj = {
      content: content,
      image: img_base64,
      likes: [],
      accountId: id,
    };
    fetch(API.api_urlpost, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      navigation.goBack();
    });
  };
  const handlerBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnBack} onPress={handlerBack}>
          <View>
            <Fontisto name="close-a" size={18} color="black" />
          </View>
        </TouchableOpacity>

        <Text style={styles.labelHeader}>Tạo bài viết</Text>
        <TouchableOpacity style={styles.btnPost} onPress={handlerPost}>
          <View>
            <Text style={styles.txtBtn}>Đăng</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.avtandname}>
        <Image source={{ uri: acc.image }} style={styles.image} />
        <View style={styles.containerName}>
          <Text style={{ fontFamily: "Opensans_Bold", fontSize: 16 }}>
            {acc.name}
          </Text>
          <Text>Công khai</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Bạn đang nghĩ gì?"
          style={[
            styles.input,
            { height: img_source === null ? "100%" : null },
          ]}
          multiline={true}
          onChangeText={(text) => {
            setContent(text);
          }}
        />
        {img_source === null ? null : (
          <Image
            source={{ uri: img_source }}
            style={{ width: "100%", height: 300 }}
          />
        )}
      </View>
      <View style={styles.bottomsheet}>
        <ScrollView>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.itemBottomSheet}>
              <Image
                source={require("../../../assets/pickimg.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text>Chọn ảnh</Text>
            </View>
          </TouchableOpacity>
          <Hr />
          <TouchableOpacity>
            <View style={styles.itemBottomSheet}>
              <Image
                source={require("../../../assets/imgbg.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text>Chọn màu nền</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ScreenPost;
