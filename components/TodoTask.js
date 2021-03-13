import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const width = Dimensions.get("window").width;

const TodoTask = ({ task, onValueChange }) => {
  const { title, completed, id } = task;

  return (
    <View style={styles.task}>
      <Text style={styles.title}>{title}</Text>
      <CheckBox
        disabled={false}
        value={completed}
        onValueChange={() => onValueChange(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
    borderColor: "red",
    borderWidth: 1,
    width: width - 16,
    flex: 1,
    padding: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
  },
});

export default TodoTask;
