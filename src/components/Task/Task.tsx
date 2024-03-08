import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { styles } from "./Styles";
import { AppText } from "components";

import ArrowUp from "images/ArrowUp.svg";
import ArrowDown from "images/ArrowDown.svg";
import EditIcon from "images/EditIcon.svg";
import DeleteIcon from "images/DeleteIcon.svg";
import Marked from "images/MarkedIcon.svg";

interface TaskProps {
  onEdit?: (name: string, text: string) => void;
  name: string;
  text: string;
  completeTask: (id: number) => void;
  id: number;
  tasks: Task[];
  deleteTask: (tasks: Task[], id: number) => void;
}

export const Task = (props: TaskProps) => {
  const { onEdit, name, text, id, completeTask, tasks, deleteTask } = props;

  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headWrapper}>
        <AppText style={styles.headText}>{name}</AppText>
        <Pressable onPress={() => setPressed(!pressed)}>
          {pressed ? <ArrowUp /> : <ArrowDown />}
        </Pressable>
      </View>

      {!pressed && (
        <View style={styles.textWrapper}>
          <AppText style={styles.text}>{text}</AppText>
        </View>
      )}

      <View style={styles.footerWrapper}>
        <View style={styles.rowContainer}>
          <Pressable
            onPress={() => onEdit("Dorem ipsum dolor sit", "Hello Hello Hello")}
          >
            <EditIcon />
          </Pressable>
          <Pressable onPress={() => deleteTask(tasks, id)}>
            <DeleteIcon />
          </Pressable>
        </View>
        <Pressable onPress={() => completeTask(id)} style={styles.rowContainer}>
          <AppText style={styles.markText}>Mark completed</AppText>
          <Marked />
        </Pressable>
      </View>
    </View>
  );
};
