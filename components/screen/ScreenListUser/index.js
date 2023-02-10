import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import ItemListUser from "../../ItemListUser";

var api_url = "http://192.168.1.14:3000/accounts";
var API = require("../../../src/requestAPI");

const ScreenListUser = ({ route }) => {
  const [data, setData] = useState([]);
  const id = route.params.uID;
  const typefl = route.params.type;
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAPI();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  console.log(route.params.arr);

  const getAPI = async () => {
    const user = await API.getUserByID(id);
    const a = await API.getUserByArrID(
      typefl === "follower" ? user.follower : user.following
    );
    setData(a);
    console.log(a);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ItemListUser item={item} />;
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default ScreenListUser;
