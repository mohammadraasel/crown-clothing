
import {UPDATE_COLLECTIONS} from './action-types'
const initialState = {
    collections: {}
}


const shopReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections:payload
            }
        default:
            return state
    }
}


export default shopReducer
