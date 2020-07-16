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
                            <TimelineContent>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
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
                            <TimelineContent>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}
