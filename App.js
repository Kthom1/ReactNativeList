import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [listItems, setListItems] = useState([]);
  const textInputHandler = enteredText => {
    setEnteredText(enteredText);
  };
  const addTextHander = () => {
    setListItems(listItems => [...listItems, enteredText]);
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
      <View>
        {listItems.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
