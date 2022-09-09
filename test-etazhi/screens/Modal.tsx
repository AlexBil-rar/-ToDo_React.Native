import FormAdd from '../components/UI/FormAdd';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Modal = () => {

    return (
        <SafeAreaProvider>
            <FormAdd/>
        </SafeAreaProvider>
    );
};

export default Modal;