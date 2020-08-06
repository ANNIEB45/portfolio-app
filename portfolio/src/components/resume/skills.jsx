import React, { Component } from 'react'


export default class skills extends Component {
    render() {
        return (
            <div className="skills">
                <h3>Skills</h3>
                <div className="skills-icon">
                    <div className="icon-container">
                        <img src='/html5.png' alt="HTML logo" className="image-overlay" />
                        {/* <div class="overlay-text">My Name is John</div> */ }

                        <img src="/javascriprt.png" alt="JavaScript logo" />
                        <img src="/sql.png" alt="SQL logo" />
                        {/* Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */ }
                        <img src="/python.png" alt="Python logo" />
                        <img src="/rubyonrails.png" alt="Ruby on Rails logo" />
                        <img src="/css.png" alt="CSS logo" />
                        <img src="/ruby.png" alt="Ruby logo" />
                        <img src="/docker.png" alt="Docker logo" />
                        <img src="nodejs.png" alt="Node JS logo" />
                        <img src="trello.png" alt="Trello logo" />
                        <img src="/mysql.png" alt="MySQL logo" />
                        {/* <img src="java.png" alt="Java logo" /> */}
                        <img src="react.png" alt="React logo" />
                    </div>
                </div>
                {/* figure out how to add tooltip */ }
            </div>
        )
    }
}
