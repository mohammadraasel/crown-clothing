import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_CART_ITEM,
    REMOVE_ITEM_QUANTITY
} from './action-types'
import {addItemToCart, removeItemQuantity} from './utils'

const initialState = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM: 
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        case REMOVE_CART_ITEM: 
            return {
                ...state,
                cartItems: state.cartItems.filter(item=> item.id !== payload.id)
            }
        case REMOVE_ITEM_QUANTITY: 
            return {
                ...state, 
                cartItems: removeItemQuantity(state.cartItems, payload)
            }
        default: 
            return state
    }
}

export default cartReducer
