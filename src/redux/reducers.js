import { combineReducers } from 'redux'
import userReducer from './user/reducer'



const rootReducer = combineReducers({
    user: userReducer
})



export const  getCurrentUser = state => state.user.currentUser


export default rootReducer;