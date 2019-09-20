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

export const removeItemQuantity = (cartItems, itemToRemove) => {
    const existedItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

    if (existedItem.quantity === 1) {
        return cartItems.filter(cartItem=> cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(cartItem => {
        return cartItem.id === itemToRemove.id ?
            { ...cartItem, quantity: cartItem.quantity - 1 }
            : 
            cartItem
    })
}