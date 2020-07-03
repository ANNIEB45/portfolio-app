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
                onSubmit={this.handleOnSubmit} method='POST'>
                    <label for='name'>Name</label>
                     <input
                            type='text'
                            name='name'
                        />
                    
                    <label for='InputEmail'>Email </label>
                     <input
                            type='email'
                            name='email'
                        />
                   
                    <label for='message'>Message</label>
                     <textarea
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
