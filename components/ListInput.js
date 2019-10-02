import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

export default function ListInput(props) {
  const [enteredText, setEnteredText] = useState("");
  const textInputHandler = enteredText => {
    setEnteredText(enteredText);
  };
  return (
    <Modal visible={props.canAdd} animationType="slide">
      <View style={styles.firstInner}>
        <TextInput
          placeholder="Add Something"
          style={styles.textInput}
          onChangeText={textInputHandler}
        />
        <Button title="ADD" onPress={() => props.addItemHandler(enteredText)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  firstInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  }
});
