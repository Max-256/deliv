import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import {
  AntDesign,
  EvilIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";

function HomeScreen(props) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* header */}
      <View style={styles.head}>
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
      </View>

      {/* body */}

      <ScrollView style={styles.body}>
        <Categories />
        <FeatureRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured category"
        />
        <FeatureRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured category"
        />
        <FeatureRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured category"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  abacus: {
    margin: 5,
  },
  body: {
    padding: 7,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  deliver: {
    fontWeight: "bold",
    opacity: 0.5,
  },
  head: {
    backgroundColor: "#fff",
    padding: 7,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "lightgray",
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
