import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";

import CategoryCard from "./CategoryCard";

function Categories(props) {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 5,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="Testing"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="Testing"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="Testing"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="Testing"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/wru"
        title="Testing"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Categories;
