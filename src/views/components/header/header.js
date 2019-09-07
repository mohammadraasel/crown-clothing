import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase'
import CartIcon from '../cart-icon'
import CartDropdown from '../cart-dropdown'
import { selectCartHidden } from '../../../redux/cart/selectors'
import { selectCurrentUser } from '../../../redux/user/selectors'
import { createStructuredSelector} from 'reselect'

function Header({currentUser, isCartHidden}) {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">
                    Shop
                </Link>
                <Link className='option' to="/contact">
                    Contact
                </Link>
                {
                    currentUser ? 
                        <div className="option" onClick={()=>auth.signOut()}>
                            Sign Out
                        </div>
                        : 
                        <Link className="option" to='/signin'>
                            Sign In
                        </Link>
                }
                <CartIcon/>
            </div>
            {
                !isCartHidden ? <CartDropdown/>:null   
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden
})



export default connect(mapStateToProps)(Header)
