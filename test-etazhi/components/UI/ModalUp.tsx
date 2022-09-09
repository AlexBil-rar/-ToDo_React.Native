import React from 'react';
import {StyleSheet, Text, TextInput, View, Modal, Alert, TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../store/slice/TodoSlice';

interface ModalProps {
    setModalVisible: (modalVisible: boolean) => void
    modalVisible: boolean;
    todo: {
        id: number;
        main: string;
        description: string;
        seconddate: string;
        active: boolean;
    }
}

const ModalUpData:React.FC<ModalProps> = ({setModalVisible, modalVisible, todo}) => {
    const [main, setMain] = React.useState(todo.main)
    const [description, setDescription] = React.useState(todo.description)
    const [date, setDate] = React.useState(todo.seconddate)
    const dispatch = useDispatch()

    const clickEdit =() => {
        dispatch(updateTodo({
            id: todo.id, 
            main: main,
            description: description,
            seconddate: date
        }));
        setModalVisible(false)
    }

    return (
        <View >
            <Modal
                 animationType="slide"
                 transparent={true}
                 visible={modalVisible}
                 onRequestClose={() => {
                   Alert.alert("Modal has been closed.");
                   setModalVisible(modalVisible);
                 }}
                >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.text}>Up Data</Text>
                        <View style={style.flex}>
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
                            <TextInput 
                                style={style.input} 
                                placeholder="Date" 
                                value={date}
                                onChangeText={setDate}
                            />
                            <TouchableOpacity onPress={() => clickEdit()} style={style.button}>
                                <Text style={{color: 'white'}}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: 240 ,
        height: 35,
        backgroundColor: "#0F6EFF",
        justifyContent: 'center'
    },
    input: {
        height: 30,
        backgroundColor: "white",   
        justifyContent: 'center',
        alignItems: 'center',
        width: 240 ,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 8,
        marginTop: 5,
        marginBottom: 10,
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '700'

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      flex: {

        marginTop: 15
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
})

export default ModalUpData;