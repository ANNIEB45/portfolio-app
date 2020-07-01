import React, { Component } from 'react'


import './footer.css'

export default class footer extends Component {
    render() {
        return (
            // <div className='footer'>
            <footer className='footer'>
                <div className='social-links'>
                    <div className='linkedin-wrapper'>
                        <a href='https://www.linkedin.com/in/annie-t-bellefleur-04a696a7/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className='twitter-wrapper'>
                        <a href='https://twitter.com/AfiaTheLegend' target='_blank' rel="noopener noreferrer">Twitter</a>
                    </div>
                    <div className='github-wrapper'>
                        <a href='https://github.com/ANNIEB45' target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
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
