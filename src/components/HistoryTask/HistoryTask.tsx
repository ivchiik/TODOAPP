import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { styles } from "./Styles";
import { AppText } from "components";

import ArrowUp from "images/ArrowUp.svg";
import ArrowDown from "images/ArrowDown.svg";
import DeleteIcon from "images/DeleteIcon.svg";
import Marked from "images/MarkedIcon.svg";

interface HistoryTaskProps {
  name: string;
  text: string;
  id: number;
  deleteTask: (tasks: Task[], id: number) => void;
  tasks: Task[];
}

export const HistoryTask = (props: HistoryTaskProps) => {
  const { name, id, text, deleteTask, tasks } = props;
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headWrapper}>
        <View style={styles.row}>
          <AppText style={styles.headText}>{name}</AppText>
          {pressed && <Marked />}
        </View>
        <Pressable onPress={() => setPressed(!pressed)}>
          {pressed ? <ArrowUp /> : <ArrowDown />}
        </Pressable>
      </View>

      {!pressed && (
        <View style={styles.textWrapper}>
          <AppText style={styles.text}>{text}</AppText>
        </View>
      )}

      {!pressed && (
        <View style={styles.footerWrapper}>
          <Pressable
            onPress={() => deleteTask(tasks, id)}
            style={styles.rowContainer}
          >
            <DeleteIcon />
          </Pressable>
          <View style={styles.rowContainer}>
            <AppText style={styles.markText}>Completed</AppText>
            <Marked />
          </View>
        </View>
      )}
    </View>
  );
};
