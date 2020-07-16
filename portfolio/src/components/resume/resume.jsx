import React, { Component } from 'react'
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import { Timeline, TimelineItem, TimelineConnector, TimelineSeparator, TimelineContent, TimelineDot } from '@material-ui/lab'

import './resume.css'

export default class resume extends Component {
    render() {
        return (
            <div className='resume'>
                <div className="section1">
                    <div>
                        <h3>Experience</h3>
                        <div>
                            <Experience />
                        </div>
                    </div>

                    <div>
                        <h3>Education</h3>
                        <div>
                            <Education />
                        </div>
                    </div>

                </div>
                <div className='section2'>
                    <Skills />
                </div>

            </div>
        )
    }
}
