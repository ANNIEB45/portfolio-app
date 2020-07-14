import React, { Component } from 'react'
import axios from 'axios'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                <div>
                    <div className='social-title'>Follow Me</div>
                    <div className='social-links'>

                        <div className='linkedin-wrapper'>
                            <a href='https://www.linkedin.com/in/annie-t-bellefleur-04a696a7/' target='_blank' rel="noopener noreferrer">
                                <LinkedInIcon id='footer-linkedin' />
                            </a>
                        </div>

                        <div className='twitter-wrapper'>
                            <a href='https://twitter.com/AfiaTheLegend' target='_blank' rel="noopener noreferrer">
                                <TwitterIcon id='footer-twitter' />
                            </a>
                        </div>

                        <div className='github-wrapper'>
                            <a href='https://github.com/ANNIEB45' target='_blank' rel="noopener noreferrer">
                                <GitHubIcon id='footer-github' />
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
