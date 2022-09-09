import React from 'react';
import {StyleSheet, Text,  View, TouchableOpacity} from 'react-native'

interface ButtonProps {
    setFiltred: (active: boolean | string) => void
    resetFilter: () => void
}

const FilterTodo:React.FC<ButtonProps> = ({setFiltred, resetFilter}) => {
    return (
        <View style={style.flex}>
            <TouchableOpacity onPress={() => resetFilter()} style={style.button} >
                <Text style={style.text}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFiltred(true)} style={style.button}>
                <Text style={style.text}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFiltred(false)} style={style.button}>
                <Text style={style.text}>inactive</Text>       
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    flex: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop: 20
    },
    button: {
        width: 80,
        height: 30,
        backgroundColor: "#0F6EFF",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    text: {
        color: 'white'
    }
})

export default FilterTodo;