import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_CART_ITEM,
    REMOVE_ITEM_QUANTITY
} from './action-types'

export const toggleCartHidden = () => {
    return dispatch => {
        dispatch({ type: TOGGLE_CART_HIDDEN })
    }
}

export const addItem = (item) => {
    return dispatch => {
        dispatch({ type: ADD_ITEM, payload: item })
    }
}

export const removeCartItem = item => {
    return dispath => {
        dispath({ type: REMOVE_CART_ITEM, payload: item })
    }
}

export const removeItem = item => {
    return dispatch => {
        dispatch({type: REMOVE_ITEM_QUANTITY, payload: item})
    }
}

