import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const Button = ({ label, type = "primary", onPress }) => {
  return (
    <Pressable style={[styles.button, styles[type]]} onPress={onPress}>
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  success: {
    backgroundColor: "#28a745",
  },
  danger: {
    backgroundColor: "#dc3545",
  },
  primary: {
    backgroundColor: "#007bff",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;
