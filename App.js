import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [listItems, setListItems] = useState([]);

  const addItemHandler = enteredText => {
    setListItems(currentListItems => [
      ...currentListItems,
      { id: Math.random().toString(), value: enteredText }
    ]);
  };

  const removeItemHandler = itemId => {
    setListItems(currentListItems => {
      return currentListItems.filter(item => item.id !== itemId);
    });
  };
  return (
    <View style={styles.container}>
      <ListInput addItemHandler={addItemHandler} />
      <FlatList
        keyExtractor={item => item.id}
        data={listItems}
        renderItem={itemData => (
          <ListItem
            id={itemData.item.id}
            value={itemData.item.value}
            removeItemHandler={removeItemHandler}
          />
        )}
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
