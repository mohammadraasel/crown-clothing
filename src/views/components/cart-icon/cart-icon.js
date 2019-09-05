import React from 'react'
import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/cart.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/actions'

function CartIcon ({toggleCart}) {
    
    return (
        <div
            onClick = {toggleCart}
            className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className = 'item-count'>0</span>
        </div>
    )
    
}


const mapDispatchToProps = dispatch => ({
    toggleCart: ()=> dispatch(toggleCartHidden())
})
//Or
// const mapDispatchToProps = {
//     toggleCart: toggleCartHidden
// }

export default connect(null, mapDispatchToProps)(CartIcon)
