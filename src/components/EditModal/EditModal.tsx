import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import ReactNativeModal from "react-native-modal";

import { styles } from "./Styles";
import { AppButton, AppText } from "components/index";

import CloseIcon from "images/ModalClose.svg";

interface EditModalProps {
  isVisible?: boolean;
  hide?: () => void;
  close?: () => void;
  onSave: () => void;
  taskName?: string;
  taskText?: string;
  changeTask: (name: string, text: string) => void;
  changeTaskText?: (str: string) => void;
  onEdit: boolean;
  setIsEditing: (val: boolean) => void;
  isEditing: null | number;
}

export const EditModal = (props: EditModalProps) => {
  const {
    isVisible,
    hide,
    close,
    onSave,
    taskName,
    taskText,
    changeTask,
    changeTaskText,
    isEditing,
    onEdit,
  } = props;
  return (
    <View style={styles.container}>
      <ReactNativeModal isVisible={isVisible} onBackdropPress={hide}>
        <View style={styles.insideContainer}>
          <View style={styles.headerWrapper}>
            <View />
            <AppText style={styles.headText}>Edit task name</AppText>
            <Pressable onPress={close}>
              <CloseIcon />
            </Pressable>
          </View>
          <View style={styles.nameInputContainer}>
            <TextInput
              placeholder="Task name"
              style={styles.taskNameInput}
              onChangeText={(value) => changeTask(value, taskText)}
              value={taskName}
            />
          </View>

          <View style={styles.detailTextWrapper}>
            <TextInput
              placeholder="Type task details here..."
              style={styles.taskDetailInput}
              textAlign="left"
              placeholderTextColor="#6C86A8"
              multiline={true}
              value={taskText}
              onChangeText={(value) => changeTask(taskName, value)}
            />
          </View>

          <AppButton
            style={styles.btn}
            text="Save"
            onPress={isEditing ? onEdit : onSave}
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};
