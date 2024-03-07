/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {RootNavigation} from './src/navigation/RootNavigation';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <RootNavigation />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
