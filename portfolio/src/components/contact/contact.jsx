import React, { Component } from 'react'

import './contact.css'

export default class contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    // componentDidMount(){
        
    // }

    // handeleOnSubmit = () => {
        
    // }

    render() {
        return (
            <div className='contact'>
                <div>Contact Me</div>
                <form>
                    <label>Name
                     <input
                            type='text'
                            name='name'
                        />
                    </label>
                    <label>Email
                     <input
                            type='text'
                            name='email'
                        />
                    </label>
                    <label>Message
                     <input
                            type='text'
                            name='message'
                        />
                    </label>
                </form>



            </div>
        )
    }
}
