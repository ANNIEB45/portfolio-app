import React, { Component } from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import './about.css'

export default class about extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about-container'>
                    <div className='image-container'>
                        <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/07/issa.jpg" alt="placeholder of Issa Rae" />

                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/annie-t-bellefleur-04a696a7/' target='_blank' rel="noopener noreferrer">
                                <LinkedInIcon id='footer-linkedin' />
                            </a>
                            <a href='https://twitter.com/AfiaTheLegend' target='_blank' rel="noopener noreferrer">
                                <TwitterIcon id='footer-twitter' />
                            </a>
                            <a href='https://github.com/ANNIEB45' target='_blank' rel="noopener noreferrer">
                                <GitHubIcon id='footer-github' />
                            </a>
                        </div>
                    </div>

                    <div className='about-paragraph'>
                        <div className="paragraph-container">
                            <h2>About Me</h2>
                            <h4>I am Software Engineer based in Atlanta, GA</h4>
                            <p>Since middle I've toyed with programming. First in (some program) and now in Software Development. For the past two years I've learned.</p>
                            <p>I am excited to begin my journey as a Software Engineer.</p>
                            <div className="cv-link">
                                <a href="#">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
