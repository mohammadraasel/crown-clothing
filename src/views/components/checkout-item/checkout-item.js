import './checkout-item.scss'
import React from 'react'
import { removeCartItem, addItem, removeItem } from '../../../redux/cart/actions'
import { connect } from 'react-redux'

function CheckoutItem({cartItem, removeCartItem, addItemToCart, removeItemQuantity}) {
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={cartItem.imageUrl} alt="item"/>
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div
                    onClick={()=>removeItemQuantity(cartItem)}
                    className="arrow">
                    &#10094;
                </div>
                <span className='value'>{cartItem.quantity}</span>
                <div
                    onClick={()=>addItemToCart(cartItem)}
                    className="arrow">
                    &#10095;
                </div>
            </span>
            <span className='price'>${cartItem.price}</span>
            <div
                onClick = {()=>removeCartItem(cartItem)}
                className="remove-button">
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeCartItem: removeCartItem,
    addItemToCart: addItem,
    removeItemQuantity: removeItem
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
