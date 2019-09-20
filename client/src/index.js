import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
export const store = configureStore()

export const persistor = persistStore(store)

function render(Component) {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate persistor = {persistor}>
                <Component/>
            </PersistGate>
        </Provider>,
        document.getElementById('root')
    );  
}


render(App)


