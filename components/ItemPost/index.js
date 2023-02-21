import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Hr from "../Hr";

var API = require("../../src/requestAPI");

const ItemPost = ({ item, actionLike, uID }) => {
  const isLiked = item.likes.includes(uID);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          borderRadius={180}
          source={{ uri: item.account.image }}
          style={{ width: 50, height: 50 }}
        />
        <View style={styles.nameandtime}>
          <Text style={{ fontFamily: "Opensans_Bold", fontSize: 17 }}>
            {item.account.name}
          </Text>
          <Text style={{ fontFamily: "Opensans", opacity: 0.7 }}>
            17 giờ trước
          </Text>
        </View>
      </View>
      <Text style={styles.content}>{item.content}</Text>
      {item.image === null ? null : (
        <View style={styles.body}>
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      )}
      <View style={styles.countinter}>
        <TouchableOpacity style={[styles.iconcontainer, styles.iconcontainer1]}>
          <AntDesign name="like1" size={20} color="black" />
          <Text>{item.likes.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconcontainer, styles.iconcontainer1]}>
          <FontAwesome name="comment" size={20} color="black" />
          <Text>{item.likes.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconcontainer, styles.iconcontainer1]}>
          <Ionicons name="share-social-sharp" size={20} color="black" />
          <Text>{item.likes.length}</Text>
        </TouchableOpacity>
      </View>
      <Hr />
      <View style={styles.interactive}>
        <TouchableOpacity
          style={styles.iconcontainer}
          onPress={() => {
            actionLike(item.id);
          }}
        >
          {isLiked === false ? (
            <AntDesign name="like2" size={24} color="black" />
          ) : (
            <AntDesign name="like1" size={24} color="black" />
          )}
          <Text style={styles.textAction}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconcontainer}>
          <FontAwesome name="comment-o" size={24} color="black" />
          <Text style={styles.textAction}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconcontainer}>
          <Ionicons name="share-social-outline" size={24} color="black" />
          <Text style={styles.textAction}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemPost;
