import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoList({ item, deleteItem }) {
  const [isCompleted, setCompleted] = useState(false);
  const onCompleted = () => { 
    if (!isCompleted) {
      Alert.alert(
        "Complete",
        "Do you want to complete your task?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => {
              setCompleted(true); 
            }
          }
        ]
      );
    } 
  }

  return (
    <TouchableOpacity 
      style={
        [
          styles.container, 
          {
            backgroundColor: isCompleted ? '#cfd8dc' : '#f5f5f5'
          }
        ]
      } 
      onPress={onCompleted}>
      <View style={styles.content}>
        {
          isCompleted ? (
            <View style={styles.content}>
              <View style={styles.cirlceContainer}>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
              </View>
              <View style={{flex: 1, justifyContent: 'center', marginLeft: 15}}>
                <Text style={[styles.textItem, {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>{item.value}</Text>
                <Text style={[styles.textTask, {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>Task</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={[styles.textTask, {color: "green", fontSize: 20}]}>Completed!</Text>
              </View>
            </View>
          ) : (
            <View style={styles.content}>
              <View style={{flex: 1, justifyContent: 'center', marginLeft: 15}}>
                <Text style={[styles.textItem]}>{item.value}</Text>
                <Text style={[styles.textTask]}>Task</Text>
              </View>
            </View>
          )
        }
        <TouchableOpacity 
          style={styles.iconContainer}
          onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    height: 'auto',
    height: 70,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    elevation: 4,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
  },
  textItem: {
    color: 'black',
    fontSize: 16,
    marginRight: 20,
  },
  textTask: {
    color: 'goldenrod',
    fontSize: 12,
    marginRight: 20,
    borderRadius: 10,
    width: 'auto',
  },
  iconContainer: {
    alignItems: 'right',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 15,
    height: 40,
    borderRadius: 10
  },
  cirlceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15
  }
});
