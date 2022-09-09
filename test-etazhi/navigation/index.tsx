import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AddToDo from '../screens/AddToDo';
import { RootStackParamList } from '../types/typesNavigation';
import Modal from '../screens/Modal';
import ModalUp from '../screens/ModalUpdDate';



const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
    return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen  name='Home' component={Home}/>
          <RootStack.Screen name='AddToDo' component={AddToDo}/>
          <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen name='Modal' component={Modal}/>
          </RootStack.Group>
          <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen name='ModalUpDate' component={ModalUp}/>
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }