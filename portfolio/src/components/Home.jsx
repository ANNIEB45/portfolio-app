import React, { Component } from 'react'
import About from './about/about'
import Projects from './projects/projects'
import Resume from './resume/resume'
import Contact from './contact/contact'

export default class Home extends Component {
    render() {
        return (
            <div>
                <header>This is the header</header>
                <About />
                <Projects />
                <Resume />
                <Contact />
                <footer>This is the footer</footer>
            </div>
        )
    }
}
