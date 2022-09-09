import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import AddToDoItem from './AddTodoItem';

import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../types/typesNavigation';

type ScreenProp = StackNavigationProp<RootStackParamList, 'Modal'>;


const AddToDoList = () => {
    const Todos = useTypedSelector((state) => state.Todo.todoList)
    const navigation = useNavigation<ScreenProp>()

    return (
        <>
        <View style={style.flex}>
            <TouchableOpacity  onPress={() => navigation.navigate('Modal')} style={style.button}>
                <Text style={style.text}>Create</Text>
            </TouchableOpacity>
        </View>
        {Todos.map((todo) => (
                <AddToDoItem key={todo.id} todo={todo} />
        ))}
        </>
    )
};

const style = StyleSheet.create({
    text: {
        color: 'white'
    },
    flex: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 80 + "%",
        height: 50,
        marginTop: 30,
        backgroundColor: "#0F6EFF",
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default AddToDoList;