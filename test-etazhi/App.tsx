import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigation';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import reduxStore from './store'
import {PersistGate} from 'redux-persist/integration/react'


export default function App() {
  const {store, persistore} = reduxStore()
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <SafeAreaProvider>
              <Navigator/>
              <StatusBar/>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>

    );
  
}
