import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import moment from "moment";
import 'moment/locale/ru'

import ModalUpData from '../UI/ModalUp';

interface TodoProps {
    todo: {   
        id: number;
        main: string;
        description: string;
        seconddate: string;
        active: boolean;
    },
}

const AddToDoItem: React.FC<TodoProps> = ({todo}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    let date = moment().format('DD MMM YYYY')
    
    return (
        <View key={todo.id} style={style.flex}>
            <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={style.block}>
                <View style={style.descriptionBlock}>
                    <Text style={style.main}>{todo.main}</Text>
                    <Text style={style.description}>{todo.description}</Text>
                    <View style={style.dateFlex}>
                        <Text style={ style.date}>{date}   -</Text>
                        <Text style={ style.date}>{moment(todo.seconddate, "").format('DD MMM YYYY')}</Text>
                    </View>
                </View>
                <View style={style.chekBlock}>
                    <AntDesign name="addfile" size={24} color="black" />
                </View>
            </TouchableOpacity>
            <ModalUpData modalVisible={modalVisible} setModalVisible={setModalVisible} todo={todo}/>
        </View>
    );
};

const style = StyleSheet.create({
    descriptionBlock: {
        width: 85 + "%"
    },
    chekBlock: {
        marginLeft: 13,
        justifyContent:'center',
        alignItems:'center',
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
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems:'center',
    }
})
export default AddToDoItem;