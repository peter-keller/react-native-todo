import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";

import InputField from "./components/InputField";
import TodoTask from "./components/TodoTask";
import Overlay from "./containers/Overlay";
import { uuidv4 } from "./utils/uuid";

const width = Dimensions.get("window").width; //full width

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState({});
  const [overlay, setOverlay] = useState([]);

  const overlayName = "addTask";

  // Add new task to state
  const addTask = () => {
    const newTask = {
      title: task,
      completed: false,
      id: uuidv4(),
    };

    setTasks({ ...tasks, [newTask.id]: newTask });
    setTask("");
    toggleOverlay(overlayName);
  };

  // Delete task from state
  const deleteTask = (id) => {
    const state = { ...tasks };
    delete state[id];

    setTasks(state);
  };

  // Updates a task to complete/uncomplete
  const changeTaskStatus = (id) => {
    const currentTask = tasks[id];

    const newTask = {
      ...currentTask,
      completed: !currentTask.completed,
    };

    setTasks({ ...tasks, [id]: newTask });
  };

  // Opens/closes overlay
  const toggleOverlay = (name) => {
    if (overlay.includes(name)) {
      setOverlay(overlay.filter((activeOverlay) => activeOverlay !== name));
      return;
    }

    setOverlay([...overlay, name]);
  };

  const clearState = () => {
    setTasks([]);
    setOverlay([]);
  };

  const renderItem = ({ item }) => (
    <TodoTask task={item} onValueChange={changeTaskStatus} />
  );

  return (
    <View style={styles.container}>
      <Text>Pete's awesome sick supercool todo app</Text>

      <Overlay
        isVisible={overlay.includes(overlayName)}
        name={overlayName}
        content={
          <InputField
            style={styles.input}
            placeholder="Add a task"
            value={task}
            onChangeText={setTask}
          />
        }
        footer={
          <View style={styles.footer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => toggleOverlay(overlayName)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={addTask}
            >
              <Text style={styles.textStyle}>Add task</Text>
            </Pressable>
          </View>
        }
      />

      <Button
        style={styles.newTask}
        title="Add Task"
        onPress={() => toggleOverlay(overlayName)}
      />
      {/* <Button title="Nuke this whole shit" onPress={clearState} /> */}
      <FlatList
        style={styles.list}
        data={Object.values(tasks)}
        renderItem={renderItem}
        keyExtractor={(task) => task.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 64,
  },
  input: {
    width: width - 16,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    marginTop: 32,
  },
  button: {
    borderRadius: 50,
    padding: 16,
    elevation: 2,
    color: "white",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  list: {
    marginTop: 48,
  },
  newTask: {
    paddingTop: 132,
  },
});
