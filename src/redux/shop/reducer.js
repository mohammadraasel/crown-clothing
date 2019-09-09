import ShopData from '../../views/pages/shop/data'

const initialState = {
    collections: ShopData
}


const shopReducer = (state = initialState, {type}) => {
    switch (type) {
        default:
            return state
    }
}


export default shopReducer
