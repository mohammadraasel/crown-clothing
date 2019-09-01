import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const isProd = process.env.NODE_ENV === 'production'

const middlewareList = [thunk]

if (!isProd) {
    middlewareList.push(logger)
}

const middlewares = compose(applyMiddleware(...middlewareList))

export default middlewares