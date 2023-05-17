import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import {
  AntDesign,
  EvilIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function HomeScreen(props) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.detailsContainer}>
          <Image style={styles.image} source={require("../assets/del.jpg")} />
          <View>
            <Text style={styles.deliver}>Deliver now</Text>
            <Text style={styles.location}>
              Current Location{" "}
              <Entypo color="#00ccbb" name="chevron-down" size={15} />
            </Text>
          </View>
        </View>
        <EvilIcons name="user" size={40} color="#00ccbb" />
      </View>

      {/* search-box */}

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <AntDesign
            color="#00ccbb"
            style={styles.searchIcon}
            name="search1"
            size={20}
          />
          <TextInput
            placeholder="Restaurants and Cousins"
            keyboardType="default"
          />
        </View>
        <MaterialCommunityIcons
          style={styles.abacus}
          color="#00ccbb"
          size={23}
          name="abacus"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  abacus: {
    margin: 5,
  },
  container: {
    backgroundColor: "#ffff",
    padding: 7,
    paddingTop: Constants.statusBarHeight + 20,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  deliver: {
    fontWeight: "bold",
    opacity: 0.5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 20,
    marginRight: 8,
  },
  location: {
    fontSize: 17,
    fontWeight: "bold",
  },
  searchBox: {
    alignItems: "center",
    backgroundColor: "lightsgray",
    flexDirection: "row",
    flex: 1,
    padding: 2,
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  searchIcon: {
    padding: 5,
  },
});

export default HomeScreen;
