import { createStore } from 'redux'
import rootReducer from './reducers'
import middlewares from './middlewares'


export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState, middlewares)
    return store
}