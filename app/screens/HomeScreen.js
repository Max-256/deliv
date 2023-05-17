import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function HomeScreen(props) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default HomeScreen;
