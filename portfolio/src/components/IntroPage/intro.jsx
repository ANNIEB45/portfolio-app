import React, { Component } from 'react'

export default class intro extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Hi, I'm Annie</h1>
                    <h3>Yes, I'm ok</h3>
                    <h5>Software Developer</h5>
                </div>
                <img src="data:image/jpeg;base64,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" alt="placeholder of Kerry Washington" />
            </div>
        )
    }
}
