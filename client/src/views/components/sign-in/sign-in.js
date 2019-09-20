import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../form-input'
import Button from '../button'
import {auth, signInWithGoogle } from '../../../firebase/firebase'
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '' ,password: ''})
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        handleChange={this.handleChange}
                        value={this.state.email} required />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={this.state.password} required />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
