import { ScrollView,  View} from 'react-native'
import AddToDoList from '../components/Add/AddTodoList';



const AddToDo = () => {
    return (
        <View>
            <ScrollView>
                <AddToDoList/>
            </ScrollView>
        </View>
    );
};

export default AddToDo;