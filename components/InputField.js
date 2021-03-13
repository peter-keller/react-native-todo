import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputField = ({ value, onChangeText, style, placeholder }) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 4,
  },
});

export default InputField;
