import React from "react";
import { Animated, Text, StyleSheet, View, Dimensions } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import Button from "./Button";

const width = Dimensions.get("window").width;

const TodoTask = ({ task, onValueChange, onDelete, index }) => {
  const { title, completed, id } = task;

  const renderButtons = (x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [(index + 1) * 64, 0],
    });

    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX: trans }],
        }}
      >
        <Button type="success" label="Edit" />
        <Button type="danger" label="Delete" onPress={() => onDelete(id)} />
      </Animated.View>
    );
  };

  return (
    // <SwipeableRow rightSideActions={renderButtons}>
    <View style={styles.task}>
      <Text style={styles.title}>{title}</Text>
      <CheckBox
        disabled={false}
        value={completed}
        onValueChange={() => onValueChange(id)}
      />
    </View>
    // </SwipeableRow>
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
  actions: {
    display: "flex",
    flexDirection: "row",
  },
});

export default TodoTask;
