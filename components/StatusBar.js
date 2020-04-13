import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const StatusBar = () => {
  return <View style={styles.statusBar}></View>;
};

export default StatusBar;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight,
  },
});
