import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ListItem(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.removeItemHandler(props.id);
      }}
    >
      <View style={styles.listItem}>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
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
