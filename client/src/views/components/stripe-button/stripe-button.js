import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function StripeCheckoutButton({ price }) {
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successfull')    
        }).catch(error => {
            console.log("Payment error:", JSON.parse(error))
            alert("There is an issue with payment. Please make sure you use the provided credit card.")
        })
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
