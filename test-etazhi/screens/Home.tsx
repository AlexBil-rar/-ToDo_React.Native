import React from 'react';
import {ScrollView,  View, } from 'react-native'
import ToDoList from '../components/Home/ToDoList';

const Home = () => {


    return (
        <View>
            <ScrollView>
            <ToDoList/>
            </ScrollView>
        </View>
      
    );
};


export default Home;