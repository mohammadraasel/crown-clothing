import './cart-dropdown.scss'
import React from 'react'
import Button from '../button'
import CartItem from '../cart-item'
import { connect } from 'react-redux'
import {getCartItems} from '../../../redux/reducers'

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
    cartItems: getCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown) 
