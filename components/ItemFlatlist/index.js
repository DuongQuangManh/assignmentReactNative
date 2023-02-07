import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import styles from "./style";
import IconText from "../IconText";

const ItemFlatlist = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          borderRadius={180}
          source={require("../../assets/avt.png")}
          style={{ width: 50, height: 50 }}
        />
        <View style={styles.nameandtime}>
          <Text style={{ fontFamily: "Opensans_Bold", fontSize: 17 }}>
            Dương Quang Mạnh
          </Text>
          <Text style={{ fontFamily: "Opensans", opacity: 0.7 }}>
            17 giờ trước
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 14, fontFamily: "Opensans" }}>
          Phong cảnh đẹp nhất trái đất
        </Text>
      </View>
      <View style={styles.body}>
        <Image
          source={require("../../assets/bgsplash.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.countinter}>
        <IconText
          type="small"
          name="2k"
          require={require("../../assets/like2.png")}
          require2={""}
        />
        <IconText
          type="small"
          name="279"
          require={require("../../assets/share.png")}
          require2={""}
        />
      </View>
      <View style={{ width: "95%", height: 1, backgroundColor: "#cfd1d5" }} />
      <View style={styles.interactive}>
        <IconText
          type="medium"
          name="Like"
          require={require("../../assets/like.png")}
          require2={require("../../assets/dislike.png")}
        />
        <IconText
          type="medium"
          name="Share"
          require={require("../../assets/share.png")}
          require2={""}
        />
      </View>
    </View>
  );
};

export default ItemFlatlist;
