import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutButton({ price }) {
    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_YDnC4T6tNQU5XjVCfBArEuOc009plfE3px'
    return (
        <StripeCheckout
            label='Pay Now' 
            name='Crown Clothing.' 
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton
