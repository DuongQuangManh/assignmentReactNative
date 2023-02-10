import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import ItemPost from "../../ItemPost";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

const ScreenHome = () => {
  const data = [
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
  ];

  const AnimatedHeaderValue = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(
    AnimatedHeaderValue,
    0,
    Platform.OS === "ios" ? 270 : 70
  );
  const translateY = diffClamp.interpolate({
    inputRange: [0, Platform.OS === "ios" ? 270 : 70],
    outputRange: [0, Platform.OS === "ios" ? -270 : -70],
  });

  const renderFlat = () => {
    return data.map((item, index) => (
      <ItemPost iduser={item.name} idstatus={item.name} key={index} />
    ));
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 70 : 0,
        backgroundColor: "white",
      }}
    >
      <Animated.View
        style={[
          {
            width: "100%",
            height: 70,
            position: "absolute",
            top: Platform.OS === "ios" ? 70 : 0,
            right: 0,
            left: 0,
            elevation: 4,
            zIndex: 100,
          },
          { transform: [{ translateY: translateY }] },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.label}>MyBlog</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <ScrollView
        style={styles.containercontent}
        onScroll={(e) => {
          AnimatedHeaderValue.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <TouchableOpacity>
          <View style={styles.poststatus}>
            <Image
              source={require("../../../assets/avt.png")}
              style={{ width: 50, height: 50, borderRadius: 180 }}
            />
            <Text
              style={{
                fontFamily: "Opensans",
                color: "gray",
                marginStart: 10,
              }}
            >
              Bạn đang nghĩ gì
            </Text>
          </View>
        </TouchableOpacity>
        {renderFlat()}
      </ScrollView>
    </View>
  );
};

export default ScreenHome;
