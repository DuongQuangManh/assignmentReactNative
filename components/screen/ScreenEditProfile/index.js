import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import Hr from "../../Hr";
import FormInput from "../../FormInput";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

var API = require("../../../src/requestAPI");
var objold = {
  job: "",
  address: "",
  acmd: "",
  relastatus: "",
};

const ScreenEditProfile = ({ navigation, route }) => {
  const id = route.params.uID;
  console.log(id + "chỉnh sửa trang cá nhân");

  const [image, setImage] = useState(
    "https://tiengdong.com/wp-content/uploads/www_tiengdong_com-hinh-anh-dang-load-dang-tai-troll-mang-cham.jpeg"
  );
  const [background, setBackground] = useState(
    "https://tiengdong.com/wp-content/uploads/www_tiengdong_com-hinh-anh-dang-load-dang-tai-troll-mang-cham.jpeg"
  );
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [acmd, setAcmd] = useState("");
  const [relastatus, setRelaStatus] = useState("");
  const [acc, setAcc] = useState(objold);

  const getAPI = async () => {
    const a = await API.getUserByID(id);
    setAcc(a);
    setImage(a.image);
    setBackground(a.background);
    setJob(a.job);
    setAddress(a.address);
    setAcmd(a.acmd);
    setRelaStatus(a.relastatus);

    console.log("abc");
  };

  const handlerChange = () => {
    changeProfile(id);
  };

  useEffect(() => {
    getAPI();
  }, []);

  const changeProfile = (id) => {
    const obj = {
      image: image,
      background: background,
      job: job,
      acmd: acmd,
      address: address,
      relastatus: relastatus,
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
        alert("Chỉnh sửa thành công");
      }
    });
  };

  const pickImage = async (setImg) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      let _uri = result.assets[0].uri;
      let file_ext = _uri.substring(_uri.lastIndexOf(".") + 1); // lấy đuôi file

      FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: "base64",
      }).then((res) => {
        setImg("data:image/" + file_ext + ";base64," + res);
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.avt}>
          <Text style={styles.label}>Ảnh đại diện</Text>
          <TouchableOpacity
            onPress={() => {
              pickImage(setImage);
            }}
          >
            <Image
              style={styles.anhdaidien}
              source={{
                uri: image,
              }}
            />
          </TouchableOpacity>
        </View>
        <Hr />
        <View style={styles.background}>
          <Text style={styles.label}>Ảnh bìa</Text>
          <TouchableOpacity
            onPress={() => {
              pickImage(setBackground);
            }}
          >
            <Image
              style={styles.anhbia}
              source={{
                uri: background,
              }}
            />
          </TouchableOpacity>
        </View>
        <Hr />

        <View style={styles.info}>
          <Text style={styles.label}>Chi tiết</Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FormInput
              icon="briefcase"
              placeholder={acc.job.length === 0 ? "Nơi làm việc" : acc.job}
              getText={setJob}
            />
            <FormInput
              icon="home"
              placeholder={
                acc.acmd.length === 0 ? "Tỉnh/Thành phố hiện tại" : acc.acmd
              }
              getText={setAcmd}
            />
            <FormInput
              icon="location-arrow"
              getText={setAddress}
              placeholder={acc.address.length === 0 ? "Quê quán" : acc.address}
            />
            <FormInput
              icon="heart"
              getText={setRelaStatus}
              placeholder={
                acc.relastatus.length === 0
                  ? "Tình trạng mối quan hệ"
                  : acc.relastatus
              }
            />
            <TouchableOpacity
              style={{ width: "100%", marginTop: 20 }}
              onPress={handlerChange}
            >
              <View style={styles.btn}>
                <Text>Thay đổi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ScreenEditProfile;
