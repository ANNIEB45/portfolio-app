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
                    <div>Projects</div>
                    <div>Resume</div>
                    <div>Contact</div>
                </div>


            </header>

        )
    }
}
