import { SET_CURRENT_USER } from './action-types'

const getInitialState = () => (
    {
        currentUser: null
    }
)


const userReducer = (state = getInitialState(), { type, payload }) => {
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}



export default userReducer;