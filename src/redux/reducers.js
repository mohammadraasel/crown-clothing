import { combineReducers } from 'redux'
import userReducer from './user/reducer'
import cartReducer, {cartActions} from './cart/reducer'



const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})



export const getCurrentUser = state => state.user.currentUser
export const getIsCartHidden = state => cartActions.getIsCartHidden(state.cart)


export default rootReducer;