import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image style={styles.emptyImage} source={require('../../assets/ic_todos.png')}/>
      <Text style={styles.emptyText}>No Task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 650
  },
  emptyImage: {
    width: 100,
    height: 100,
  },
  emptyText: {
    color: 'black',
    marginTop: 30,
    fontSize: 30,
  }
});