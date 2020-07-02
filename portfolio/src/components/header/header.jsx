import React, { Component } from 'react'

import './header.css'

export default class header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='top-signature'>
                    <div className='signature'>Annie B.</div>
                </div>

                <div className='header-links'>
                    <div className='header-project'>Projects</div>
                    <div className='header-resume'>Resume</div>
                    <div className='header-contact'>Contact</div>
                </div>


            </header>

        )
    }
}
