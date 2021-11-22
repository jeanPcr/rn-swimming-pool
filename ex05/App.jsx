import React from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true} style={styles.rectangleScrollview}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangles} />
        </View>
      </ScrollView>
      <ScrollView
        nestedScrollEnabled={true}
        horizontal
        style={styles.squareScrollview}
      >
        <View style={styles.squareContainer}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </ScrollView>
      <ScrollView nestedScrollEnabled={true} style={styles.rectangleScrollview}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangles} />
        </View>
      </ScrollView>
      <ScrollView
        nestedScrollEnabled={true}
        horizontal
        style={styles.squareScrollview}
      >
        <View style={styles.squareContainer}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </ScrollView>
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={styles.rectangleScrollview}
      >
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangles} />
          <View style={styles.rectangles} />
          <View style={styles.rectangles} />
          <View style={styles.rectangles} />
        </View>
      </ScrollView>
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={styles.rectangleScrollview}
      >
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangles} />
        </View>
      </ScrollView>
      <ScrollView
        nestedScrollEnabled={true}
        horizontal
        style={styles.squareScrollview}
      >
        <View style={styles.squareContainer}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </ScrollView>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.rectangleScrollview}
        horizontal
      >
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangles} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 0,
  },
  parentScrollViewStyle: {
    flex: 1,
    height: height - 300,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  rectangleScrollview: {
    width: "100%",
    marginVertical: 5,
    flex: 1,
    padding: 0,
    maxHeight: 100,
  },
  squareScrollview: {
    flex: 1,
    padding: 0,
    width: "100%",
    maxHeight: 100,
  },
  squareContainer: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  rectangleContainer: {
    margin: 0,
    padding: 0,
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  rectangles: {
    backgroundColor: "#FF00FE",
    height: 100,
    width: 180,
    padding: 0,
    margin: 5,
  },
  square: {
    backgroundColor: "red",
    height: 100,
    width: 100,
    margin: 5,
    padding: 0,
  },
});
