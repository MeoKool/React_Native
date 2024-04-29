import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your todo'/>
      <Button title='Add todo'/>
    </View>
    <Text>The Todo List...</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop: 100,
  },
  inputContainer:{
flexDirection:"row",
  },
  textInput:{
    padding:8,
borderWidth: 2,
borderColor:"green",
marginRight: 8,
width: "70%",
  }
});
