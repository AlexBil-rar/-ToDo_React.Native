import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slice/TodoSlice';
import DatePicker from 'react-native-modern-datepicker';

import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../types/typesNavigation';

import moment from "moment"

type ScreenProp = StackNavigationProp<RootStackParamList, 'AddToDo'>;


const FormAdd = () => {
    const [main, setMain] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [date, setDate] = React.useState(moment().format('DD MMM YYYY'))

    const dispatch = useDispatch()
    const navigation = useNavigation<ScreenProp>()

    const createHendler = () => {
        dispatch(addTodo({
            main: main,
            description: description,
            seconddate: date
        }));
        navigation.navigate('AddToDo')
    }
    
    return (
            <View style={style.flex}>
                <Text style={style.text}>UpDate ToDo</Text>
                <TextInput
                    style={style.input}
                    placeholder="Main" 
                    value={main}
                    onChangeText={setMain}
                />
                <TextInput
                    style={style.input}
                    placeholder="Description" 
                    value={description}
                    onChangeText={setDescription}
                />
                <DatePicker
                    mode="calendar"
                    onSelectedChange={date => setDate(date)}
                />
                <TouchableOpacity onPress={() => createHendler()} style={style.button}>
                    <Text style={{color:"#ffff"}}>UpDate</Text>
                </TouchableOpacity>
            </View>
    );
};

const style = StyleSheet.create({
    datePickerStyle: {
        width: 230,
      },
    button: {
        width: 60 + "%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F6EFF",
        marginTop: 20
    },
    input: {
        width: 50 + "%",
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: '700'
    },
    flex: {
        flex: 1,
        alignItems: "center",
        marginTop: 50
    }
})



export default FormAdd;