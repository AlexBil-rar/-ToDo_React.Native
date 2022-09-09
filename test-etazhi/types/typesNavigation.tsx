import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
    Home: undefined;
    AddToDo: undefined;
    Modal:undefined;
    ModalUpDate: undefined
  };

  export type RootTabScreenProps<Screen extends keyof RootStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;