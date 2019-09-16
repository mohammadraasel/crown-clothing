import { UPDATE_COLLECTIONS } from './action-types'


export const updateCollections = (collections) => {
    return dispatch => {
       dispatch({type: UPDATE_COLLECTIONS, payload: collections }) 
    }
}