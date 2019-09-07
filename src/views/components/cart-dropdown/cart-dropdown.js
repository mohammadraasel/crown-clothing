import './cart-dropdown.scss'
import React from 'react'
import Button from '../button'
import CartItem from '../cart-item'
import { connect } from 'react-redux'
import {selectCartItems} from '../../../redux/cart/selectors'

function CartDropdown ({cartItems}) {
    
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))
                }
            </div>
            <Button>
                Go To Checkout
            </Button>
        </div>
    )
    
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown) 
