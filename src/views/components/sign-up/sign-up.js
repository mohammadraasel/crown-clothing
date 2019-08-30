import React, { Component } from 'react'
import './sign-up.scss'
import FormInput from '../form-input'
import Button from '../button'  
import { auth, createUserDocument } from '../../../firebase/firebase'

export class SignUp extends Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't matched")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
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
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2> 
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='Name'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label='Confirm Password'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                   <Button type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp
