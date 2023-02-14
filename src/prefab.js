import AsyncStorage from "@react-native-async-storage/async-storage";

const SEARCH_HISTORY_KEY = "SEARCH_HISTORY";

export const saveSearchHistory = async (searchTerm, id) => {
  try {
    const searchHistory = await AsyncStorage.getItem(SEARCH_HISTORY_KEY + id);
    const searches = searchHistory ? JSON.parse(searchHistory) : [];
    const index = await searches.indexOf(searchTerm);
    console.log(index + "đây là index trùng");
    if (index !== -1) {
      searches.splice(index, 1);
    }
    searches.unshift(searchTerm);
    await AsyncStorage.setItem(
      SEARCH_HISTORY_KEY + id,
      JSON.stringify(searches)
    );
  } catch (error) {
    console.error(error);
  }
};
export const getSearchHistory = async (id) => {
  try {
    const searchHistory = await AsyncStorage.getItem(SEARCH_HISTORY_KEY + id);
    return searchHistory ? JSON.parse(searchHistory) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const removeSearchHistory = async (query, id) => {
  try {
    let searchHistory = await AsyncStorage.getItem(SEARCH_HISTORY_KEY + id);
    searchHistory = JSON.parse(searchHistory);
    const index = searchHistory.indexOf(query);
    if (index !== -1) {
      searchHistory.splice(index, 1);
    }
    await AsyncStorage.setItem(
      SEARCH_HISTORY_KEY + id,
      JSON.stringify(searchHistory)
    );
  } catch (error) {
    console.error(error);
  }
};
