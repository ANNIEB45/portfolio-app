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
                            <TimelineContent>Provided quality service to customers with passion and efficiency. Work in conjunction with other teams to maintain functional and efficient operations of front desk. </TimelineContent>
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
                            <TimelineContent>Collaborated with multi-departmental team to complete research and detail reporting of company policies and procedures. Accepted opportunity for mentoring students.</TimelineContent>
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
                            <TimelineContent>Provided compassionate patient care using ethical medical reporting and testing and using critical and analytical thinking. </TimelineContent>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}
