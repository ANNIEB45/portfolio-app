import React, { Component } from 'react'

import './intro.css'

export default class intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className='intro-paragraph'>
                    <div>
                        <h1>Hi, I'm Annie</h1>
                        <h5>Software Developer</h5>
                    </div>
                </div>
                <div className="scrolling"></div>


                {/* <img src="https://bit.ly/3fsJ9S8" alt="placeholder of Kerry Washington" /> */ }
            </div>
        )
    }
}
