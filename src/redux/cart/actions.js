import { TOGGLE_CART_HIDDEN } from './action-types'


export const toggleCartHidden = () => {
    return dispatch => {
        dispatch({ type: TOGGLE_CART_HIDDEN })
    }
}
