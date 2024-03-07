import React from 'react';
import {View, Pressable} from 'react-native';
import {AppText, Header} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './Styles';

import AddIcon from '../../assets/images/AddIcon.svg';
import TasksIcon from '../../assets/images/TasksIcon.svg';
import HistoryEmptyIcon from '../../assets/images/HistoryEmptyIcon.svg';
import {useNavigation} from '@react-navigation/native';

export const Tasks = () => {
  const navigation = useNavigation();

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
            <Pressable onPress={() => navigation.navigate('HISTORY' as never)}>
              <HistoryEmptyIcon />
            </Pressable>
          </View>
        </View>
        <AppText style={styles.clearTasksText}>Clear all Tasks</AppText>
      </View>
      <View style={styles.line} />

      <Pressable style={styles.addIcon}>
        <AddIcon />
      </Pressable>
    </SafeAreaView>
  );
};
