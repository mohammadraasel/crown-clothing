import './cart-dropdown.scss'
import React from 'react'
import Button from '../button'

function CartDropdown () {
    
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">

            </div>
            <Button>
                Go To Checkout
            </Button>
        </div>
    )
    
}

export default CartDropdown
