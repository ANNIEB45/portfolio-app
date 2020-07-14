import React, { Component } from 'react'

import './resume.css'

export default class resume extends Component {
    render() {
        return (
            <div className='resume'>
                <div>
                    <div className="section1">
                        <div>
                            <h3>Experience</h3>
                            <ul>
                                <div>
                                    <div>Grady Hospital</div>
                                    <div>Atlanta, GA</div>
                                    <div>Description about job, accomplishements, etc</div>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h3>Education</h3>
                            <ul>
                                <div>
                                    <div>General Assembly</div>
                                    <div>Atlanta, GA</div>
                                    <div>Description about job, accomplishements, etc</div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul>Skills
                        <li>JavaScript</li>
                            <li>Ruby on Rails</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
