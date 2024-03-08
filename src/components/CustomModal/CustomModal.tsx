import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import ReactNativeModal from "react-native-modal";

import { styles } from "./Styles";
import { AppButton, AppText } from "components/index";

import CloseIcon from "images/ModalClose.svg";

interface CustomModalProps {
  isVisible?: boolean;
  hide?: () => void;
  close?: () => void;
  onSave: () => void;
  taskName?: string;
  taskText?: string;
}

export const CustomModal = (props: CustomModalProps) => {
  const { isVisible, hide, close, onSave, taskName, taskText } = props;
  return (
    <View style={styles.container}>
      <ReactNativeModal isVisible={isVisible} onBackdropPress={hide}>
        <View style={styles.insideContainer}>
          <View style={styles.headerWrapper}>
            <View />
            <AppText style={styles.headText}>
              {taskName ? "Edit task name" : "Create task"}
            </AppText>
            <Pressable onPress={close}>
              <CloseIcon />
            </Pressable>
          </View>
          <View style={styles.nameInputContainer}>
            <TextInput
              placeholder="Task name"
              style={styles.taskNameInput}
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
            />
          </View>

          <AppButton style={styles.btn} text="Save" onPress={onSave} />
        </View>
      </ReactNativeModal>
    </View>
  );
};
