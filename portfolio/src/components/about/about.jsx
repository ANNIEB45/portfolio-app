import React, { Component } from 'react'

import './about.css'

export default class about extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about-paragraph'>
                    <p>Since middle I've toyed with programming. First in (some program) and now in Software Development. For the past two years I've learned...</p>
                </div> 
                <div>
                    <img src="data:image/jpeg;base64,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" alt=""/>
                </div>
                <div className='skills'>
                    <ul> 
                        <li>JavaScript</li>
                        <li>Database: MongoDB, SQL</li>
                    </ul>
                </div>
            </div>
        )
    }
}
