export const addItemToCart = (cartItems, itemToAdd) => {
    const existedItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id)
    if (existedItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === itemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        })
    }
    return [...cartItems, {...itemToAdd, quantity:1}]
}