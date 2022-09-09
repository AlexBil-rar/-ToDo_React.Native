import React from 'react';
import {StyleSheet,  TextInput, View, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../types/typesNavigation';

type ScreenProp = StackNavigationProp<RootStackParamList, 'AddToDo'>;

interface SearchProps {
    search: string,
    setSearch: (search: string) => void
}

const InputSearch:React.FC<SearchProps> = ({search,setSearch}) => {
    const navigation = useNavigation<ScreenProp>()
    return (
        <View style={styles.container}> 
            <View style={styles.flex}>
                <TextInput
                    style={styles.input}
                    placeholder="Search day or main" 
                    value={search}
                    onChangeText={setSearch}
                />
                <TouchableOpacity onPress={() => navigation.navigate('AddToDo')} style={styles.add}>
                    <AntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40
    },
    add: {
        width: 42,
        height: 42,
        backgroundColor: 'white',
        borderColor: "black" ,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50
    },
    flex: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    input: {
      height: 40,   
      marginRight: 5 +"%", 
      width: 65+ "%", 
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
      backgroundColor: 'white'
    },
  });


export default InputSearch;