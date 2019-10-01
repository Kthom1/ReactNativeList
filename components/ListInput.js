import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ListInput(props) {
  const [enteredText, setEnteredText] = useState("");
  const textInputHandler = enteredText => {
    setEnteredText(enteredText);
  };
  return (
    <View style={styles.firstInner}>
      <TextInput
        placeholder="Add Something"
        style={styles.textInput}
        onChangeText={textInputHandler}
      />
      <Button title="ADD" onPress={() => props.addItemHandler(enteredText)} />
    </View>
  );
}

const styles = StyleSheet.create({
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
