
import {
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_REQUEST,
    FETCH_COLLECTIONS_SUCCESS
} from './action-types'

const initialState = {
    collections: null,
    isFetchingCollections: false,
    errorMessage: ''
}


const shopReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_COLLECTIONS_REQUEST:
            return {
                ...state,
                isFetchingCollections: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: payload,
                isFetchingCollections: false
            }
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetchingCollections: false,
                errorMessage: payload
            }
        default:
            return state
    }
}


export default shopReducer
