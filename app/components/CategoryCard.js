import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

function CategoryCard({ imageUrl, title }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    borderRadius: 3,
    position: "relative",
    marginRight: 5,
    overflow: "hidden",
  },
  image: {
    height: 75,
    width: 75,
  },
  text: {
    position: "absolute",
    bottom: 1,
    fontWeight: "bold",
    left: 5,
    color: "#fff",
  },
});

export default CategoryCard;
