import React, { Component } from 'react'


import './footer.css'

export default class footer extends Component {
    render() {
        return (
            // <div className='footer'>
            <footer className='footer'>
                <div className='social-links'>
                    <div className='linkedin-wrapper'>
                        <a href='https://www.linkedin.com/in/annie-t-bellefleur-04a696a7/' target='_blank' rel="noopener noreferrer">LinkedIn
                          
                        </a>
                        </div>
                    <div className='twitter-wrapper'>Twitter</div>
                    <div className='github-wrapper'>GitHub</div>
                </div>
                <div className='resources-container'>
                    <div>Blog</div>
                    <div>Search</div>
                </div>

            </footer>
            // </div>
        )
    }
}
