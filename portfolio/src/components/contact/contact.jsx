import React, { Component } from 'react'
import axios from 'axios'

import './contact.css'

export default class contact extends Component {
    // state = {
    //     name: '',
    //     email: '',
    //     message: ''
    // }

    // componentDidMount(){

    // }

    // handeleOnSubmit = () => {

    // }

    render() {
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
                    />

                    <label htmlFor='InputEmail'>Email</label>
                    <input
                        id='Inputemail'
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                    />

                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        type='text'
                        name='message'
                        rows='5'
                    ></textarea>

                    <input type="submit" value='Send' />
                </form>



            </div>
        )
    }
}
