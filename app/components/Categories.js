import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import CategoryCard from "./CategoryCard";

function Categories(props) {
  return (
    <ScrollView horizontal style={styles.container}>
      <CategoryCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Categories;
