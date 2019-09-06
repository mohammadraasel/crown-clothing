import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM
} from './action-types'


export const toggleCartHidden = () => {
    return dispatch => {
        dispatch({ type: TOGGLE_CART_HIDDEN })
    }
}


export const addItem = (item) => {
    return dispatch => {
        dispatch({type: ADD_ITEM, payload: item})
    }
}


