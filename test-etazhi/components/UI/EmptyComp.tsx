import React from 'react';
import {StyleSheet, Text, View,} from 'react-native'

const Empty = () => {
    return (
        <View style={styles.flex}>
            <Text style={styles.text}>Задач пока нет.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    add: {
        width: 42,
        height: 42,
        backgroundColor: 'white',
        borderColor: "black" ,
        borderWidth: 1,
        marginTop: 39,
        padding: 10,
        borderRadius: 50
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200
    },
    text: {
        fontSize: 20      ,
        fontWeight: '700'  
    },
  });


export default Empty;