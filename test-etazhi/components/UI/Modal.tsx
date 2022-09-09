import React from 'react';
import {StyleSheet, Text,  View, Modal, Alert, TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/slice/TodoSlice';

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

const ModalComponent:React.FC<ModalProps> = ({setModalVisible, modalVisible, todo}) => {
    const dispatch = useDispatch()

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
                        <Text style={style.text}>Вы действительно хотите удалить задачу?</Text>
                        <View style={style.flex}>
                            <TouchableOpacity style={style.button} onPress={() => dispatch(removeTodo({id: todo.id}))}>
                                <Text>ДА</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.button, {borderWidth: 1}]} onPress={() => setModalVisible(false)}>
                                <Text>НЕТ</Text>
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
        height: 30,
        backgroundColor: "white",   
        justifyContent: 'center',
        alignItems: 'center',
        width: 20 + "%",
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
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
        flexWrap: 'wrap',
        flexDirection: 'row',
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

export default ModalComponent;