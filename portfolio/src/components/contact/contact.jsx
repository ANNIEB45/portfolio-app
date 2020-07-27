import React, { Component } from 'react'
import Social from './social'
import emailjs from 'emailjs'
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

    // componentDidMount(){
    //     this.getAllEmails()
    // }

    // getAllEmails = async () => {
    //     try {
    //         // const res = await axios.get('/api/email')
    //         const newState = { ...this.state.newEmail }
    //         newState.allEmails = res.data 
    //         this.setState(newState)
    //     } catch (err) {
    //         console.log('failed to get all email')
    //         console.log(err)
    //     }
    // }

    handeleOnSubmit = async(evt) => {
        evt.preventDefault()
        console.log('i was clicked')
        // try {
        //     await axios.post('api/email', this.state.newEmail)
        //     this.getAllEmails()
        // } catch (err) {
        //     console.log('failed to create email')
        //     console.log(err)
        // }

        // let template_params = {
        //     "user_email": "user_email_value",
        //     "first_name": "first_name_value",
        //     "last_name": "last_name_value",
        //     "company_name": "company_name_value",
        //     "subject": "subject_value",
        //     "message": "message_value",
        //     "user_name": "user_name_value"
        //  }
         
        //  const service_id = "default_service";
        //  const template_id = "portfolio_email";
        //  emailjs.send(service_id, template_id, template_params);

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

                <div className='contact-text'>Let's Talk</div>

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
                    {/* <img className="bottom-img" src="https://bit.ly/2OmNqdV" alt="" /> */}
                    {/* <img className="top-img" src="" alt="" /> */}
                    </div>


            </div>
        )
    }
}
