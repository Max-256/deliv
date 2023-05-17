import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";

function FeatureRow({ title, description, featuredCategory }) {
  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <AntDesign name="arrowright" color="#00ccdd" size={20} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard
          id={1}
          imageUrl="https://links.papareact.com/gn7"
          title="Dummy Title"
          rating={4.5}
          genre="Japanese"
          address="Main Street"
          short_description="This is a short description"
          dishes={[]}
          lng={20}
          lat={501}
        />
        <RestaurantCard
          id={1}
          imageUrl="https://links.papareact.com/gn7"
          title="Dummy Title"
          rating={4.5}
          genre="Japanese"
          address="Main Street"
          short_description="This is a short description"
          dishes={[]}
          lng={20}
          lat={501}
        />
        <RestaurantCard
          id={1}
          imageUrl="https://links.papareact.com/gn7"
          title="Dummy Title"
          rating={4.5}
          genre="Japanese"
          address="Main Street"
          short_description="This is a short description"
          dishes={[]}
          lng={20}
          lat={501}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontWeight: "bold",
    opacity: 0.5,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default FeatureRow;
