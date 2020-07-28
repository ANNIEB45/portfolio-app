import React, { Component } from 'react'
import { Timeline, TimelineItem, TimelineConnector, TimelineSeparator, TimelineContent, TimelineDot } from '@material-ui/lab'

export default class education extends Component {
    render() {
        return (
            <div>
                <Timeline align='left'>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <div>
                            <TimelineContent>General Assembly</TimelineContent>
                            <div>
                                <TimelineContent>Atlanta, GA </TimelineContent>
                                <TimelineContent>March 2020-June 2020</TimelineContent>
                            </div>
                            <TimelineContent>Software Engineer Immersive Program.
                                <br />  12-week, 500+ hour training program focused in Git/GitHub, HTML/CSS, JavaScript, MongoDB, SQL, Python, Django, React, Heroku, etc. </TimelineContent>
                        </div>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <div>
                            <TimelineContent>Corinthians College</TimelineContent>
                            <div>
                                <TimelineContent>Atlanta, GA </TimelineContent>
                                <TimelineContent>August 2012- September 2014</TimelineContent>
                            </div>
                            <TimelineContent>AS Respiratory Therarpy
                                <br /> Dean's List </TimelineContent>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}
