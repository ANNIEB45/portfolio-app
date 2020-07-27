import React, { Component } from 'react'

import './intro.css'

export default class intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className='intro-paragraph'>

                    <h1>Hi...
                    <br />I'm <span>Annie</span></h1>
                    {/* <h2>Yes, I am ok...</h2> */ }
                    <p>Software Developer, Food Enthusiast, Committed Smiler</p>

                </div>
                <div className="scrolling">
                    {/* <img src="/IMG_0154.jpeg" alt=""/> */}
                </div>


                {/* <img src="https://bit.ly/3fsJ9S8" alt="placeholder of Kerry Washington" /> */ }
            </div>
        )
    }
}
