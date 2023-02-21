import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../contains/colors";

const CommentItem = ({ avatar, name, content }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: 30 }} activeOpacity={0.6}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.nickName}>{name}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 12,
  },
  contentContainer: {
    backgroundColor: colors.background,
    paddingTop: 8,
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 8,
    borderRadius: 12,
    maxWidth: "85%",
  },
  nickName: {
    fontSize: 16,
    fontFamily: "Opensans_Bold",
  },
  content: {
    fontSize: 15,
    marginTop: 5,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    margin: 4,
  },
});
