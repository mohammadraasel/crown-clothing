import React from 'react'
import './sign-in-sign-up-page.scss'
import SignIn from '../../components/sign-in'
import SignUp from '../../components/sign-up/sign-up';
function SignInSignUpPage(props) {
    console.log('props:', props)
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp/>
        </div>
    )
}

export default SignInSignUpPage
