import './checkout-page.scss'

import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../../redux/cart/selectors'
import CheckoutItem from '../../components/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button'

function CheckoutPage({ cartItems, totalPrice }) {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                    
                ))
            }
            <div className="total">
                <span>Total Price: ${totalPrice}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 CVV: 123
            </div>
            
            <StripeCheckoutButton price={totalPrice}/>
            
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    totalPrice: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage)
