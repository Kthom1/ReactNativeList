import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

export default function ListInput(props) {
  const [enteredText, setEnteredText] = useState("");
  const textInputHandler = enteredText => {
    setEnteredText(enteredText);
  };
  const addItemAndClearField = () => {
    props.addItemHandler(enteredText);
    setEnteredText("");
  };
  return (
    <Modal visible={props.canAdd} animationType="slide">
      <View style={styles.firstInner}>
        <TextInput
          placeholder="Add Something"
          style={styles.textInput}
          onChangeText={textInputHandler}
        />
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.cancelAdd} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => props.addItemHandler(enteredText)}
            />
          </View>
        </View>
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
    width: "80%",
    marginBottom: 20
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: 100
  }
});
