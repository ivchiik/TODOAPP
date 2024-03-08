import React, { useEffect, useState } from "react";
import { View, Pressable, FlatList } from "react-native";
import { AppText, Header, Task, CustomModal } from "components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";

import AddIcon from "images/AddIcon.svg";
import TasksIcon from "images/TasksIcon.svg";
import HistoryEmptyIcon from "images/HistoryEmptyIcon.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Tasks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<{ name: string; text: string }>({
    name: "",
    text: "",
  });
  const [modalEdit, setModalEdit] = useState<{ name: string; text: string }>({
    name: "",
    text: "",
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    await AsyncStorage.getItem("tasks").then((res) => {
      if (res) {
        setTasks(JSON.parse(res));
      }
    });
  };

  const handleModalPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setModalEdit(() => ({
      name: "",
      text: "",
    }));
  };

  const handleModalEdit = (name?: string, text?: string) => {
    setModalVisible(true);
    setModalEdit({
      name: name || "",
      text: text || "",
    });
  };

  const handleModalSave = async () => {
    await AsyncStorage.getItem("tasks").then(async (res) => {
      let parsed: Task[];
      if (!res) {
        parsed = [];
      } else {
        parsed = JSON.parse(res);
      }

      const id = parsed?.length || 0;

      const task: Task = {
        id: id,
        name: modalEdit.name,
        text: modalEdit.text,
        completed: false,
      };

      parsed.push(task);
      setTasks(parsed);
      await AsyncStorage.setItem("tasks", JSON.stringify(parsed));
      handleModalClose();
    });
  };

  const completeTask = async (id: number) => {
    await AsyncStorage.getItem("tasks").then(async (res) => {
      if (res) {
        let parsed = JSON.parse(res);
        const foundTask: Task = parsed.find((task: Task) => task.id == id);
        await handleTaskCompletion(foundTask);
        removeTaskFromTasks(parsed, foundTask);
      }
    });
  };

  const handleTaskCompletion = async (foundTask: Task) => {
    const completedTasks = await AsyncStorage.getItem("completedTasks");
    let parsedCompletedTasks =
      (completedTasks && JSON.parse(completedTasks)) || [];
    parsedCompletedTasks.push(foundTask);

    await AsyncStorage.setItem(
      "completedTasks",
      JSON.stringify(parsedCompletedTasks)
    );
  };

  const removeTaskFromTasks = async (parsed: Task[], foundTask: Task) => {
    const removedArray = parsed.filter((task) => task !== foundTask);
    await AsyncStorage.setItem("tasks", JSON.stringify(removedArray));
    setTasks(removedArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.btnWrapper}>
        <View style={styles.btnRow}>
          <View style={styles.btnContainer}>
            <AppText style={styles.btnText}>Tasks</AppText>
            <TasksIcon />
          </View>
          <View style={styles.btnContainer}>
            <AppText style={styles.btnText}>History</AppText>
            <Pressable onPress={() => navigation.navigate("HISTORY" as never)}>
              <HistoryEmptyIcon />
            </Pressable>
          </View>
        </View>
        <AppText style={styles.clearTasksText}>Clear all Tasks</AppText>
      </View>
      {/* <View style={styles.line} /> */}
      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            onEdit={handleModalEdit}
            text={item.text}
            completeTask={completeTask}
            id={item.id}
          />
        )}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
      />

      <Pressable style={styles.addIcon} onPress={handleModalPress}>
        <AddIcon />
      </Pressable>

      <CustomModal
        isVisible={modalVisible}
        taskName={modalEdit.name}
        taskText={modalEdit.text}
        hide={() => setModalVisible(false)}
        close={handleModalClose}
        changeTask={handleModalEdit}
        onSave={handleModalSave}
      />
    </SafeAreaView>
  );
};
