import React, { Component } from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import './contact.css'

export default class social extends Component {
    render() {
        return (
            <div className="social-container">
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
        )
    }
}
