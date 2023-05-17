import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

function RestaurantCard({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  lng,
  lat,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text style={styles.text}>
            <Entypo name="star" color="gray" size={20} />
            {rating}
          </Text>
          <Text style={styles.text}>
            <Entypo name="location-pin" color="lightgray" size={20} />
            Nearby {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 3,
    elevation: 2,
    overflow: "hidden",
    marginTop: 20,
    marginRight: 5,
    marginBottom: 5,
  },
  details: {
    padding: 5,
  },
  image: {
    height: 130,
    width: 200,
  },
  title: {
    fontWeight: "500",
    fontSize: 17,
  },
  text: {
    opacity: 0.4,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default RestaurantCard;
