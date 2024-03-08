import React, { useEffect, useState } from "react";
import { View, Pressable, FlatList } from "react-native";
import { AppText, Header, Task, CustomModal, EditModal } from "components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";

import AddIcon from "images/AddIcon.svg";
import TasksIcon from "images/TasksIcon.svg";
import HistoryEmptyIcon from "images/HistoryEmptyIcon.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Tasks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState<Task>({
    id: 0,
    name: "",
    text: "",
  });
  const [modalEdit, setModalEdit] = useState<{ name: string; text: string }>({
    name: "",
    text: "",
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigation = useNavigation();

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleEditModalOpen = () => {
    setEditModalVisible(true);
  };

  const handleEditModalClose = () => {
    setEditModalVisible(false);
    setModalEdit(() => ({
      name: "",
      text: "",
    }));
    setIsEditing(null);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setModalEdit(() => ({
      name: "",
      text: "",
    }));
    setIsEditing(null);
  };

  const clearTasks = async () => {
    await AsyncStorage.removeItem("tasks");
    setTasks([]);
  };

  const handleModalEdit = async () => {
    setEditModalVisible(true);
    const task: Task = {
      name: modalEdit.name,
      text: modalEdit.text,
      id: isEditing.id!,
    };

    const filteredTasks = tasks.filter((task) => task.id !== isEditing.id);

    const newTaskArray = [...filteredTasks, task];

    await AsyncStorage.setItem("tasks", JSON.stringify(newTaskArray));
    setTasks([...filteredTasks, task]);
    handleEditModalClose();
  };

  const onPressEdit = (id: number, name: string, text: string) => {
    setIsEditing({ id, name, text });
    setModalEdit({ name, text });
    handleEditModalOpen();
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
        removeTaskFromTasks(parsed, foundTask.id);
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

  const removeTaskFromTasks = async (parsed: Task[], id: number) => {
    const removedArray = parsed.filter((task) => task.id !== id);
    console.log(parsed, id);
    await AsyncStorage.setItem("tasks", JSON.stringify(removedArray));
    setTasks(removedArray);
  };

  const onChangeText = (name?: string, text?: string) => {
    setModalEdit({ name: name || "", text: text || "" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header setSearchQuery={setSearchQuery} />
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
        <Pressable onPress={clearTasks}>
          <AppText style={styles.clearTasksText}>Clear all Tasks</AppText>
        </Pressable>
      </View>
      {/* <View style={styles.line} /> */}
      <FlatList
        data={filteredTasks}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            onEdit={handleModalEdit}
            text={item.text}
            completeTask={completeTask}
            id={item.id}
            tasks={tasks}
            deleteTask={removeTaskFromTasks}
            setIsEditing={onPressEdit}
          />
        )}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
          zIndex: 99,
        }}
      >
        <Pressable style={styles.addIcon} onPress={handleModalPress}>
          <AddIcon />
        </Pressable>
      </View>

      <CustomModal
        isVisible={modalVisible}
        taskName={modalEdit?.name}
        taskText={modalEdit?.text}
        hide={() => setModalVisible(false)}
        close={handleModalClose}
        changeTask={onChangeText}
        onSave={handleModalSave}
        setIsEditing={onPressEdit}
        isEditing={isEditing}
      />

      <EditModal
        isVisible={editModalVisible}
        hide={() => setEditModalVisible(false)}
        close={handleEditModalClose}
        taskName={modalEdit?.name}
        taskText={modalEdit?.text}
        changeTask={onChangeText}
        taskText={modalEdit?.text}
        onSave={handleModalEdit}
      />
    </SafeAreaView>
  );
};
