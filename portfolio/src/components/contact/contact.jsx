import React, { Component } from 'react'
import Social from './social'
import emailjs from 'emailjs'
import axios from 'axios'

import './contact.css'

export default class contact extends Component {
    state = {
        newEmail: {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handeleOnSubmit = (evt) => {
        evt.preventDefault()
        console.log('i was clicked')

        let template_params = {
            "user_email": "user_email_value",
            "first_name": "first_name_value",
            "last_name": "last_name_value",
            "company_name": "company_name_value",
            "subject": "subject_value",
            "message": "message_value",
            "user_name": "user_name_value"
        }

        const service_id = "default_service";
        const template_id = "portfolio_email";
        emailjs.send(service_id, template_id, template_params);

            const newState = { ...this.state }
            newState.newEmail.firstName = ''
            newState.newEmail.lastName = ''
            newState.newEmail.companyName =  ''
            newState.newEmail.email = ''
            newState.newEmail.subject = ''
            newState.newEmail.message = ''
    

    }

    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.newEmail[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    }


    render() {
        const { firstName, lastName, companyName, subject, email, message } = this.state.newEmail
        return (
            <div className='contact'>

                <form
                    onSubmit={ this.handleOnSubmit }
                    method='POST'>
                    
                    <div className="name-container">
                    {/* <label htmlFor='name'> First Name</label> */}
                    <input
                        id='firstName'
                        type='text'
                        name='firstName'
                        value={ firstName }
                        placeholder='First Name'
                        onChange={ this.handleOnChange }
                    />

                    {/* <label htmlFor='lastName'>Last Name</label> */}
                    <input
                        id='lastName'
                        type='text'
                        name='lastName'
                        value={ lastName }
                        placeholder=' Last Name'
                        onChange={ this.handleOnChange }
                        />
                        </div>

                    {/* <label htmlFor='companyName'>Company Name</label> */}
                    <input
                        id='companyName'
                        type='text'
                        name='companyName'
                        value={ companyName }
                        placeholder='Company Name'
                        onChange={ this.handleOnChange }
                    />

                    {/* <label htmlFor='InputEmail'>Email</label> */}
                    <input
                        id='Inputemail'
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        value={ email }
                        onChange={ this.handleOnChange }
                    />

                    {/* <label htmlFor='subject'>Subject</label> */}
                    <input
                        id='subject'
                        type='text'
                        name='subject'
                        value={ subject}
                        placeholder='Subject'
                        onChange={ this.handleOnChange }
                    />

                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        type='text'
                        name='message'
                        rows='5'
                        value={ message }
                        onChange={ this.handleOnChange }
                        placeholder='Message'
                    ></textarea>

                    <input type="submit" value='Send' />
                </form>
                <Social />
                {/* <div className='images'>
                    <img className="bottom-img" src="https://bit.ly/2OmNqdV" alt="" /> 
                    <img className="top-img" src="" alt="" />
                </div> */}


            </div>
        )
    }
}
