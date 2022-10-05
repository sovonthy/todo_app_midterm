import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import AddInput from './src/components/AddInput';
import Header from './src/components/Header';
import TodoList from './src/components/TodoList';
import Empty from './src/components/Empty';

export default function App() {
  const [data, setData] = useState([]);

  const deleteItem = (key) => {
    Alert.alert(
      "Delete",
      "Do you want to delete your task?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => {
            setData((prevTodo) => {
              return prevTodo.filter((todo) => todo.key != key);
            });
          }
        }
      ]
    );
  };

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <FlatList 
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <Header />}
            ListEmptyComponent={() => <Empty />}
            data={data} 
            keyExtractor={(item) => item.key}
            renderItem={({item}) => (
              <TodoList item={item} deleteItem={deleteItem} />
            )} 
            rightOpenValue={-55}
          />
          <AddInput submitHandler={submitHandler} />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
