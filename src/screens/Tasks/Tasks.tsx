import React, { useState } from "react";
import { View, Pressable, FlatList } from "react-native";
import { AppText, Header, Task, CustomModal } from "components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";

import AddIcon from "images/AddIcon.svg";
import TasksIcon from "images/TasksIcon.svg";
import HistoryEmptyIcon from "images/HistoryEmptyIcon.svg";

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
  const navigation = useNavigation();

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

  const handleModalEdit = (name: string, text: string) => {
    setModalVisible(true);
    setModalEdit(() => ({
      name: name,
      text: text,
    }));
  };

  const handleModalSave = () => {

  }

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
        data={[1, 2, 3]}
        showsVerticalScrollIndicator={false}
        renderItem={() => <Task onEdit={handleModalEdit} />}
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
      />
    </SafeAreaView>
  );
};
