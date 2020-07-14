import React, { Component } from 'react'
import Header from './header/header'
import About from './about/about'
import Projects from './projects/projects'
import Resume from './resume/resume'
import Contact from './contact/contact'
import Footer from './footer/footer'
import Intro from "./IntroPage/intro"

import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div>

                <Header />
                <Intro />
                <About />
                <Resume />
                <Projects />
                <Contact />
                <Footer />

            </div>
        )
    }
}
