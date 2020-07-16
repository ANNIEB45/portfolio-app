import React, { Component } from 'react'
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
                            <Timeline align='left'>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <div>
                                        <TimelineContent>Grady Hospital</TimelineContent>
                                        <div>
                                            <TimelineContent>Atlanta, GA </TimelineContent>
                                            <TimelineContent>2012-2014</TimelineContent>
                                        </div>
                                        <TimelineContent>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
                                    </div>
                                </TimelineItem>
                            </Timeline>


                        </div>

                    </div>
                    <div>
                        <h3>Education</h3>

                        <div>
                            <Timeline align='left'>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <div>
                                        <TimelineContent>Grady Hospital</TimelineContent>
                                        <div>
                                            <TimelineContent>Atlanta, GA </TimelineContent>
                                            <TimelineContent>2012-2014</TimelineContent>
                                        </div>
                                        <TimelineContent>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
                                    </div>
                                </TimelineItem>
                            </Timeline>
                        </div>

                    </div>
                </div>
                <div className='section2'>
                    <ul>Skills
                        <li>JavaScript</li>
                        <li>Ruby on Rails</li>
                    </ul>
                </div>

            </div>
        )
    }
}
