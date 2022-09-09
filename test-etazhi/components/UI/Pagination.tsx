import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

interface PageProps {
    todoPage: number ,
    totalTodo:  number,
    paginate: (pageNumber: any) => void
}

const Pagination:React.FC<PageProps> = ({todoPage, totalTodo, paginate}) => {
    
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalTodo / todoPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <View  style={style.container} >
            <View style={style.flex}>
                {pageNumbers.map((number) => (
                    <TouchableOpacity key={number} onPress={() => paginate(number)} style={style.page}>
                        <Text>{number}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    page: {
        paddingRight: 10,
        paddingLeft: 10,
        marginRight: 2,
        marginLeft: 2,
        paddingTop:5,
        paddingBottom: 5,
        borderColor: '#DADADA',
        borderRadius: 3,
        borderWidth: 1
    },
    flex: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 30
    }
})
export default Pagination;