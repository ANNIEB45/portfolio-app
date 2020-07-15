import React, { Component } from 'react'

import './about.css'

export default class about extends Component {
    render() {
        return (
            <div className='about'>
                <div>
                    <div></div>
                    <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/07/issa.jpg" alt="placeholder of Issa Rae" />
                </div>
                <div className='about-paragraph'>
                    <h4>Software Engineer</h4>
                    <p>Since middle I've toyed with programming. First in (some program) and now in Software Development. For the past two years I've learned...</p>
                </div>
                
            </div>
        )
    }
}
