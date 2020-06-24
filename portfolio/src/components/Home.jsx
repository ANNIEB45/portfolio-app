import React, { Component } from 'react'
import About from './about/about'
import Projects from './projects/projects'
import Resume from './resume/resume'
import Contact from './contact/contact'
import Footer from './footer/footer'

import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <div>Me</div>
                    <div>
                        <div>Projects</div>
                        <div>Resume</div>
                        <div>Contact</div>
                    </div>
                </header>

                <About />
                <Projects />
                <Resume />
                <Contact />
                <Footer />
            </div>
        )
    }
}
