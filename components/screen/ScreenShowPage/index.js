import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../../contains/colors";
import Hr from "../../Hr";
import ItemPost from "../../ItemPost";
import { Ionicons } from "@expo/vector-icons";
import ItemInfo from "../../ItemInfo";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

var user = {
  image:
    "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-du",
  background:
    "https://img.meta.com.vn/Data/image/2022/02/07/mau-ghi-la-mau-gi-2.jpg",
  name: "",
  address: "",
  acmd: "",
  job: "",
  relastatus: "",
};
var API = require("../../../src/requestAPI");
const ScreenShowPage = ({ navigation, route }) => {
  const idSearch = route.params.uIDSearch;
  const idUser = route.params.uIDUser;

  const [acc, setAcc] = useState(user);
  const [refreshing, setRefreshing] = useState(false);
  const [follower, setFler] = useState([]);
  const [following, setFling] = useState([]);
  const [data, setData] = useState([]);
  const [isFl, setFl] = useState();

  const handlerFollow = async () => {
    API.getUserByID(idSearch)
      .then((a) => {
        const isFollower = a.follower.includes(idUser);
        return isFollower === false
          ? [...a.follower, idUser]
          : a.follower.filter((id) => id !== idUser);
      })
      .then((fl) => {
        console.log(fl + "đây là mảng người follow");
        const obj = {
          follower: fl,
        };
        fetch(API.api_url + "/" + idSearch, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }).then((res) => {
          if (res.status === 200) {
            getUser();
          }
        });
      });

    API.getUserByID(idUser)
      .then((a) => {
        const isFollow = a.following.includes(idSearch);
        return isFollow === false
          ? [...a.following, idSearch]
          : a.following.filter((id) => id !== idSearch);
      })
      .then((fl) => {
        console.log(fl + "đây là mảng đã follow");
        const obj = {
          following: fl,
        };
        fetch(API.api_url + "/" + idUser, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }).then((res) => {
          if (res.status === 200) {
            getUser();
            setFl(!isFl);
          }
        });
      });
  };

  const getPost = async () => {
    const a = await API.getAllPostByID(idSearch);
    setData(a);
    setRefreshing(false);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getUser();
    getPost();
  }, []);

  const handlerShowFollower = () => {
    navigation.navigate("Danh sách", { uID: idSearch, type: "follower" });
  };
  const handlerShowFollowing = () => {
    navigation.navigate("Danh sách", { uID: idSearch, type: "following" });
  };

  const getUser = async () => {
    const a = await API.getUserByID(idSearch);
    setAcc(a);
    setFler(a.follower);
    setFling(a.following);
    setFl(a.follower.includes(idUser));
  };

  const handlerLike = async (id) => {
    console.log("đây là id bài viết được like: " + id);
    console.log("Đây là người thích bài viết: " + idUser);
    API.getPostByID(id)
      .then((a) => {
        const isLike = a.likes.includes(idUser);
        return isLike === false
          ? [...a.likes, idUser]
          : a.likes.filter((id) => id !== idUser);
      })
      .then((like) => {
        const obj = {
          likes: like,
        };
        fetch(API.api_urlpost + "/" + id, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }).then((res) => {
          if (res.status === 200) {
            getPost();
          }
        });
      });
  };

  useEffect(() => {
    getUser();
    getPost();
  }, []);

  const renderFlat = () => {
    return data.map((item, index) => (
      <ItemPost item={item} key={index} actionLike={handlerLike} uID={idUser} />
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{acc.name}</Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.img}>
          <Image style={styles.background} source={{ uri: acc.background }} />
          <Image style={styles.avatar} source={{ uri: acc.image }} />
        </View>
        <View style={styles.nameandfollower}>
          <Text style={{ fontFamily: "Opensans_Bold", fontSize: 22 }}>
            {acc.name}
          </Text>
          <View style={styles.containerFollow}>
            <TouchableOpacity onPress={handlerShowFollower}>
              <Text style={styles.textfl}>
                {follower.length}
                <Text style={styles.textgray}> người theo dõi</Text>
              </Text>
            </TouchableOpacity>
            <Entypo name="dot-single" size={24} color="black" />
            <TouchableOpacity onPress={handlerShowFollowing}>
              <Text style={styles.textfl}>
                {following.length}
                <Text style={styles.textgray}> đang theo dõi</Text>
              </Text>
            </TouchableOpacity>
          </View>
          {idUser === idSearch ? null : (
            <TouchableOpacity onPress={handlerFollow}>
              <View style={styles.btnFl}>
                <SimpleLineIcons
                  name={isFl === true ? "user-following" : "user-follow"}
                  size={24}
                  color="black"
                />
                <Text>{isFl === true ? "Đã theo dõi" : "Theo dõi"}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.infodetail}>
          <Text style={styles.labelLarge}>Chi tiết</Text>
          <ItemInfo
            icon="briefcase"
            label={acc.job.length === 0 ? "Nơi làm việc" : "Đang làm việc tại"}
            content={acc.job}
          />
          <ItemInfo
            icon="home"
            label={
              acc.acmd.length === 0 ? "Tỉnh/Thành phố hiện tại" : "Sống tại"
            }
            content={acc.acmd}
          />
          <ItemInfo
            icon="location-pin"
            label={acc.address.length === 0 ? "Quê quán" : "Đến từ"}
            content={acc.address}
          />
          <ItemInfo
            icon="heart"
            label={
              acc.relastatus.length === 0
                ? "Tình trạng mối quan hệ"
                : acc.relastatus
            }
            content=""
          />
        </View>
        <View style={styles.postandstatus}>
          <Hr />
          <Text style={styles.labelLarge}>Bài viết của bạn</Text>
          <View
            style={{
              width: "100%",
              marginTop: 10,
              backgroundColor: colors.background,
            }}
          >
            {renderFlat()}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenShowPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "ios" ? "10%" : 0,
  },
  header: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
  },
  btnBack: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    alignSelf: "center",
    fontFamily: "Opensans_Bold",
    fontSize: 16,
  },
  img: {
    width: "100%",
    height: 250,
    backgroundColor: "white",
    position: "relative",
  },
  infodetail: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
  },
  background: {
    width: "100%",
    height: "85%",
    backgroundColor: colors.background,
    position: "absolute",
    top: 0,
  },
  avatar: {
    width: 150,
    height: 150,
    backgroundColor: colors.background,
    position: "absolute",
    bottom: 0,
    left: 15,
    borderRadius: 180,
    borderColor: "white",
    borderWidth: 5,
  },
  nameandfollower: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
  },
  btnFl: {
    width: "50%",
    height: 40,
    backgroundColor: "#e8f3ff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
  },
  postandstatus: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
  },
  poststatus: {
    width: "100%",
    height: 70,
    alignItems: "center",
    paddingStart: 10,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: colors.background,
    marginTop: 10,
  },
  labelLarge: {
    fontFamily: "Opensans_Bold",
    fontSize: 18,
  },

  containerFollow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textfl: {
    fontFamily: "Opensans_Bold",
    fontSize: 15,
  },
  textgray: {
    fontFamily: "Opensans",
    color: "gray",
  },
});
