import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Task from './components/Task'
import styles from './Apps.components.style'
import Form from './components/Form'

export default function App() {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete?",
      [
        { 
          text: "OK", 
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          },
        },
        { text: "Cancel", onPress: () => {} }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.item}>
          {
            taskList.map((item, index)=>{
              return <Task key={index} title={item} number={index+1} onDeleteTask={()=>handleDeleteTask(index)} />
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
