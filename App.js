import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [listItems, setListItems] = useState([]);
  const textInputHandler = enteredText => {
    setEnteredText(enteredText);
  };
  const addTextHander = () => {
    setListItems(listItems => [
      ...listItems,
      { key: Math.random().toString(), value: enteredText }
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstInner}>
        <TextInput
          placeholder="Add Something"
          style={styles.textInput}
          onChangeText={textInputHandler}
        />
        <Button title="ADD" onPress={addTextHander} />
      </View>
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
  },
  firstInner: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  }
});
