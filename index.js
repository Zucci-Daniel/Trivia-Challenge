/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import { name as appName } from './app.json';
import { store } from './src/redux/store'

let persistor = persistStore(store);

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Root);
