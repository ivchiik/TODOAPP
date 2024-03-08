import React, { useEffect, useState } from "react";
import { View, Pressable, FlatList } from "react-native";
import { Header, AppText, HistoryTask } from "components";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./Styles";
import TasksEmptyIcon from "images/TasksEmptyIcon.svg";
import HistoryIcon from "images/HistoryIcon.svg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const History = () => {
  const navigation = useNavigation();

  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    await AsyncStorage.getItem("completedTasks").then((res) => {
      if (res) {
        const parsed = JSON.parse(res);
        setCompletedTasks(parsed);
      }
    });
  };

  const removeTaskFromTasks = async (parsed: Task[], id: number) => {
    const removedArray = parsed.filter((task) => task.id !== id);
    await AsyncStorage.setItem("completedTasks", JSON.stringify(removedArray));
    setCompletedTasks(removedArray);
  };

  const clearHistory = async () => {
    await AsyncStorage.removeItem("completedTasks");
    setCompletedTasks([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.btnWrapper}>
        <View style={styles.btnRow}>
          <View style={styles.btnContainer}>
            <AppText style={styles.btnText}>Tasks</AppText>
            <Pressable onPress={() => navigation.navigate("TASKS" as never)}>
              <TasksEmptyIcon />
            </Pressable>
          </View>
          <View style={styles.btnContainer}>
            <AppText style={styles.btnText}>History</AppText>
            <HistoryIcon />
          </View>
        </View>
        <Pressable onPress={clearHistory}>
          <AppText style={styles.clearTasksText}>Clear History</AppText>
        </Pressable>
      </View>
      {/* <View style={styles.line} /> */}
      <FlatList
        data={completedTasks}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <HistoryTask
            id={item.id}
            name={item.name}
            text={item.text}
            tasks={completedTasks}
            deleteTask={removeTaskFromTasks}
          />
        )}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
      />
    </SafeAreaView>
  );
};
