import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import Constants from "expo-constants";
import { EvilIcons, Entypo } from "@expo/vector-icons";

function HomeScreen(props) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    padding: 5,
    paddingTop: Constants.statusBarHeight + 10,
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
});

export default HomeScreen;
