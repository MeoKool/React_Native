import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [toDoText,setToDoText] = useState("");
  const [toDoList,setToDoList] = useState([]);

  function textInputChange(textChanged){
    setToDoText(textChanged);
  }`31  wsZ`

  function addToDo(){
    setToDoList((currentTodoList) => [...toDoList,toDoText]);
  }

  return (
    <View style={styles.container} >
    <View style={styles.inputContainer}>
      <TextInput onChangeText={textInputChange} style={styles.textInput} placeholder='Your todo'/>
      <Button onPress={addToDo} title='Add todo'/>
    </View>
    <View style={styles.todoList}>
    {toDoList.map((todo)=><Text key={todo}>{todo}</Text>)}
    </View>
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
