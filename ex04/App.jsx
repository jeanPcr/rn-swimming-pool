import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const IMAGE_URL =
    "https://fr.myeurop.info/wp-content/uploads//2017/07/nouvel-espace-luxembourg.jpg";
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "#fff" }}>Header</Text>
      </View>
      <View style={styles.content}>
        <Text>Hello</Text>
        <Image
          source={{ uri: IMAGE_URL }}
          style={{ width: 250, height: 200 }}
        />
      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#000",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#ECF0F1",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
});
