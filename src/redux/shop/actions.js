import {firestore, convertCollectionsSnapshopToMap} from '../../firebase/firebase'
import {
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_REQUEST,
    FETCH_COLLECTIONS_SUCCESS
} from './action-types'


export const fetchCollections = () => {
    return dispatch => {
        dispatch({ type: FETCH_COLLECTIONS_REQUEST }) 
        const collectionRef = firestore.collection('collections')
        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshopToMap(snapshot)
                dispatch({
                    type: FETCH_COLLECTIONS_SUCCESS,
                    payload: collectionsMap
                })
            })
            .catch(error => {
                dispatch({ type: FETCH_COLLECTIONS_FAILURE, payload: error })
            })
    }
}