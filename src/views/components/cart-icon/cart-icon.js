import React from 'react'
import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/cart.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/actions'
import {selectCartItemsCount} from '../../../redux/cart/selectors'

function CartIcon ({toggleCart, itemCount}) {
    
    return (
        <div
            onClick = {toggleCart}
            className='cart-icon'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
    
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCart: ()=> dispatch(toggleCartHidden())
})
//Or
// const mapDispatchToProps = {
//     toggleCart: toggleCartHidden
// }

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
