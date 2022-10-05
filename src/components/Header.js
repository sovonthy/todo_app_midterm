import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  let today = new Date().toISOString().slice(0, 10);

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Todo</Text>
      <Text style={styles.HeaderList}>{today}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderText: {
    color: 'black',
    fontSize: 30
  },
  HeaderList: {
    color: 'black',
    fontSize: 20,
    marginRight: 20
  }
});