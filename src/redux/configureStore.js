import {
    applyMiddleware,
    compose,
    createStore
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const middlewares = [thunk, logger]
export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(...middlewares)))
    return store
}