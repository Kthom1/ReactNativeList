import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [listItems, setListItems] = useState([]);

  const addItemHandler = enteredText => {
    setListItems(listItems => [
      ...listItems,
      { key: Math.random().toString(), value: enteredText }
    ]);
  };
  return (
    <View style={styles.container}>
      <ListInput addItemHandler={addItemHandler} />
      <FlatList
        data={listItems}
        renderItem={itemData => <ListItem value={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 50
  }
});
