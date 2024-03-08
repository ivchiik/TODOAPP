import React from "react";
import { View, Pressable, FlatList } from "react-native";
import { Header, AppText, HistoryTask } from "components";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./Styles";
import TasksEmptyIcon from "images/TasksEmptyIcon.svg";
import HistoryIcon from "images/HistoryIcon.svg";
import { useNavigation } from "@react-navigation/native";

export const History = () => {
  const navigation = useNavigation();

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
        <AppText style={styles.clearTasksText}>Clear History</AppText>
      </View>
      {/* <View style={styles.line} /> */}
      <FlatList
        data={[1, 2]}
        showsVerticalScrollIndicator={false}
        renderItem={() => <HistoryTask />}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
      />
    </SafeAreaView>
  );
};
