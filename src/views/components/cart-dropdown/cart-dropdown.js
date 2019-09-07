import './cart-dropdown.scss'
import React from 'react'
import Button from '../button'
import CartItem from '../cart-item'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { selectCartItems } from '../../../redux/cart/selectors'
import { Routes } from '../../../constants/routes'
import { toggleCartHidden } from '../../../redux/cart/actions'

function CartDropdown({ cartItems, history, toggleCart }) {
    
    const handleClick = () => {
        history.push(Routes.CHECKOUT_PAGE())
        toggleCart()
    }
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length?
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))
                        : 
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <Button onClick = {handleClick}>
                Go To Checkout
            </Button>
        </div>
    )
    
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = {
    toggleCart: toggleCartHidden
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(CartDropdown) 
