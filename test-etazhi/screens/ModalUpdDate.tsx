import { SafeAreaProvider } from 'react-native-safe-area-context';
import FormUp from '../components/UI/FormAdd';


const ModalUp = () => {

    return (
        <SafeAreaProvider>
            <FormUp/>
        </SafeAreaProvider>
    );
};

export default ModalUp;