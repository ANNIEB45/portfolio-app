import React, { Component } from 'react'
import { Timeline, TimelineItem, TimelineConnector, TimelineSeparator, TimelineContent, TimelineDot } from '@material-ui/lab'


export default class experience extends Component {
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
                            <TimelineContent>Laureate Medical Group</TimelineContent>
                            <div>
                                <TimelineContent>Atlanta, GA </TimelineContent>
                                <TimelineContent>2018-2019</TimelineContent>
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
                            <TimelineContent>Atlanta Job Corps</TimelineContent>
                            <div>
                                <TimelineContent>Atlanta, GA </TimelineContent>
                                <TimelineContent>2016-2018</TimelineContent>
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
                            <TimelineContent>Grady Hospital</TimelineContent>
                            <div>
                                <TimelineContent>Atlanta, GA </TimelineContent>
                                <TimelineContent>2014-2016</TimelineContent>
                            </div>
                            <TimelineContent>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TimelineContent>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}
