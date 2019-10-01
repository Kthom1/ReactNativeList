import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItem(props) {
  return (
    <View key={props.key} style={styles.listItem}>
      <Text>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
