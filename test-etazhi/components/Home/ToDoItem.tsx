import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import moment from "moment";
import 'moment/locale/ru'
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../../store/slice/TodoSlice';
import ModalComponent from '../UI/Modal';

interface TodoProps {
    todo: {   
        id: number;
        main: string;
        description: string;
        seconddate: string;
        active: boolean;
    },
    lastOne: {   
        id: number;        
    }
}

const ToDOItem: React.FC<TodoProps> = ({todo, lastOne}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const dispatch = useDispatch()

    const handleCopmleteClick = () => {
        dispatch(
            toggleComplete({id: todo.id, active:!todo.active})
        )
    }
    
    let date = moment().format('DD MMM YYYY')
    
    return (
        <>
            <View  key={todo.id} style={style.flex}>
                <TouchableOpacity
                    onPress={() => {handleCopmleteClick()}}
                    style={style.block}>
                    <View style={style.descriptionBlock}>
                        <Text style={!todo.active ? style.main: [style.main, {textDecorationLine: 'line-through'}]}>{todo.main}</Text>
                        <Text style={!todo.active ? style.description: [style.description, {textDecorationLine: 'line-through'}]}>{todo.description}</Text>
                        <View style={style.dateFlex}>
                            <Text style={!todo.active ? style.date: [style.date, {textDecorationLine: 'line-through'}]}>{date}   -</Text>
                            <Text style={!todo.active ? style.date: [style.date, {textDecorationLine: 'line-through'}]}>{moment(todo.seconddate, "").format('DD MMM YYYY')}</Text>
                        </View>
                    </View>
                    <View style={style.chekBlock}>
                        {todo.active === true && <AntDesign name="check" size={25} color="black" /> }
                    </View>
                    {todo.active === true && 
                    <TouchableOpacity style={style.blockDelete} onPress={() => setModalVisible(true)}>
                        <View style={style.iconDel}>
                            <MaterialIcons name="restore-from-trash" size={24} color="black" />
                        </View>
                    </TouchableOpacity> }
                    <ModalComponent
                    todo={todo}
                    setModalVisible={setModalVisible}
                    modalVisible={modalVisible}
                    />
                </TouchableOpacity>
                { lastOne.id == todo.id && <Text style={style.lastText}>Конец списка.</Text> }

            </View>

        </>
    );
};

const style = StyleSheet.create({
    lastText: {
        marginTop: 10
    },
    iconDel: {
        justifyContent:'center',
        alignItems:'center',
        height: 100 ,
    },
    blockDelete: {
        width: 35,
        height: 100 + "%",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'red'
    },
    descriptionBlock: {
        width: 80 + "%"
    },
    chekBlock: {
        marginLeft: 0,
        alignItems:'center',
        width: 29, 
        height: 29,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: "#3C89FF",
        borderWidth: 2
    },
    dateFlex: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    date: {
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 7
    },
    main: {
        fontSize: 20,
        fontWeight:  "600",
        marginTop: 8,
        marginLeft: 10,
        marginBottom: 7
    },
    description: {
        color :"#9C9C9C",
        marginLeft: 10,
        marginBottom: 7
    },
    flex: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20
    },
    block: {
        width: 80 + "%",
        backgroundColor: "#D5EDFF",
        borderRadius: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:'space-evenly',
        alignItems:'center',

    }
})
export default ToDOItem;