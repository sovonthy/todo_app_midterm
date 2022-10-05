import React, { useEffect, useRef, useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Keyboard, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddInput({submitHandler}) {
  const [value, setValue] = useState("");
  const textInput = React.createRef();

  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
    keyboardDidHideListener.current = Keyboard.addListener('keyboardWillHide', onKeyboardHide);

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);

  const onKeyboardShow = event => setKeyboardOffset(event.endCoordinates.height - 40);
  const onKeyboardHide = () => setKeyboardOffset(0);
  const onChangeText = (text) => setValue(text);

  return (
    <View style={[styles.container, {marginBottom: keyboardOffset}]}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          ref={textInput} 
          placeholder='Add Task...' 
          onChangeText={onChangeText}/>
      </View>
      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={() => {
          if (!value) {
            Alert.alert(
              "Warning",
              "Task Required!",
              [
                {
                  text: "Ok",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
              ]
            );
            return;
          }

          textInput.current.clear();
          setValue(submitHandler(value)); 
        }}>
        <MaterialIcons name="add" size={24} color="midnightblue" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 10
  },
  input: {
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    width: 300,
    height: 45,
    marginRight: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    elevation: 4,
  }, 
  submitButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    marginBottom: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    elevation: 4,
  }
});