import React, { Component } from 'react'
import Social from './social'
import axios from 'axios'

import './contact.css'

export default class contact extends Component {
    state = {
        allEmails: [],
        newEmail: {
            name: '',
            email: '',
            message: ''
        }
    }

    componentDidMount(){
        this.getAllEmails()
    }

    getAllEmails = async () => {
        try {
            const res = await axios.get('/api/email')
            const newState = { ...this.state.newEmail }
            newState.allEmails = res.data 
            this.setState(newState)
        } catch (err) {
            console.log('failed to get all email')
            console.log(err)
        }
    }

    handeleOnSubmit = async(evt) => {
        evt.preventDefault()
        console.log('i was clicked')
        try {
            await axios.post('api/email', this.state.newEmail)
            this.getAllEmails()
        } catch (err) {
            console.log('failed to create email')
            console.log(err)
        }
    }

    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.newEmail[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    }

    render() {
        const {email, name, message} = this.state.newEmail
        return (
            <div className='contact'>

                <div>Contact Me</div>

                <form
                    onSubmit={ this.handleOnSubmit }
                    method='POST'>
                    
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        value={ name }
                        placeholder='Name'
                        onChange={this.handleOnChange}
                    />

                    <label htmlFor='InputEmail'>Email</label>
                    <input
                        id='Inputemail'
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        value={ email }
                        onChange={this.handleOnChange}
                    />

                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        type='text'
                        name='message'
                        rows='5'
                        value={ message }
                        onChange={this.handleOnChange}
                    ></textarea>

                    <input type="submit" value='Send' />
                </form>
                <Social />
                <div className='images'>
                    <img className="bottom-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/home-office-decor-ideas-1582573361.jpg" alt="" />
                    <img className="top-img" src="data:image/jpeg;base64,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" alt="" />
                    </div>


            </div>
        )
    }
}
