import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [canAdd, setCanAdd] = useState(false);

  const addItemHandler = enteredText => {
    setListItems(currentListItems => [
      ...currentListItems,
      { id: Math.random().toString(), value: enteredText }
    ]);
    setCanAdd(false);
  };

  const removeItemHandler = itemId => {
    setListItems(currentListItems => {
      return currentListItems.filter(item => item.id !== itemId);
    });
  };
  return (
    <View style={styles.container}>
      <ListInput
        canAdd={canAdd}
        addItemHandler={addItemHandler}
        cancelAdd={() => {
          setCanAdd(false);
        }}
      />
      <Button
        title="Add Something"
        onPress={() => {
          setCanAdd(true);
        }}
      />
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
