import React, { useEffect, useState } from "react";
import { View, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "navigation/Navigation.types";

import { Header, AppText, HistoryTask } from "components";
import { styles } from "./Styles";

import TasksEmptyIcon from "images/TasksEmptyIcon.svg";
import HistoryIcon from "images/HistoryIcon.svg";

export const History = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = completedTasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <Header setSearchQuery={setSearchQuery} />
      <View style={styles.btnWrapper}>
        <View style={styles.btnRow}>
          <View style={styles.btnContainer}>
            <AppText style={styles.btnText}>Tasks</AppText>
            <Pressable onPress={() => navigation.navigate("TASKS")}>
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
      <FlatList
        data={filteredTasks}
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
        ListFooterComponent={() => <View style={styles.footerView} />}
      />
    </SafeAreaView>
  );
};
