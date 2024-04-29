import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [toDoText,setToDoText] = useState("");

  function textInputChange(textChanged){
    setToDoText(textChanged);
  }

  function addTodo(){
console.log(toDoText);
  }

  return (
    <View style={styles.container} >
    <View style={styles.inputContainer}>
      <TextInput onChangeText={textInputChange} style={styles.textInput} placeholder='Your todo'/>
      <Button onPress={addTodo} title='Add todo'/>
    </View>
    <Text style={styles.todoList}>The Todo List...</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop: 100,
    flex:1,
  },
  inputContainer:{
    marginBottom: 50,
flexDirection:"row",
borderBottomWidth: 1,
borderBottomColor:"grey",
paddingBottom: 50,
flex: 1,
alignItems:"center",

  },
  textInput:{
    padding:8,
borderWidth: 2,
borderColor:"blue",
marginRight: 8,
width: "70%",
  },
  todoList:{
    flex: 6,
  }
});
