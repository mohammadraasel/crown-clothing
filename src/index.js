import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'


const store = configureStore()
function render(Component) {
    ReactDOM.render(
        <Provider store = {store}>
            <Component/>
        </Provider>,
        document.getElementById('root')
    );  
}


render(App)


