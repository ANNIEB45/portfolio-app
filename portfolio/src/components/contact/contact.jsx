import React, { Component } from 'react'
import Social from './social'
import axios from 'axios'
import { Form, Col, Button } from 'react-bootstrap'
import emailjs from "emailjs-com"

import './contact.css'

export default class contact extends Component {
    state = {
        newEmail: {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            subject: '',
            message: ''
        }
    }





    handeleOnSubmit = (evt) => {
        evt.preventDefault()
        console.log('i was clicked')


        // let template_params = {
        //     "user_email": "user_email_value",
        //     "first_name": "first_name_value",
        //     "last_name": "last_name_value",
        //     "company_name": "company_name_value",
        //     "subject": "subject_value",
        //     "message": "message_value",
        //     "user_name": "user_name_value"
        //  }

        //  const service_id = "default_service";
        //  const template_id = "portfolio_email";
        //  emailjs.send(service_id, template_id, template_params);

        // resetForm = () => {
        //     this.setState({
        //         firstName: '',
        //         lastName: '',
        // companyName: '',
        //         email: '',
        //         subject: '',
        //         message: ''
        //     })
        // }

    }

    handleOnChange = (evt) => {
        const newState = { ...this.state }
        newState.newEmail[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(evt.target.value)
    }

    render() {
        const { firstName, lastName, companyName, subject, email, message } = this.state.newEmail
        return (
            <div className='contact'>

                <Form onSubmit={ this.handeleOnSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={ firstName }
                                    onChange={ this.handleOnChange }
                                    placeholder="First Name" />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={ lastName }
                                    onChange={ this.handleOnChange }
                                    placeholder="Last Name" />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicCompany">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            name="companyNamne"
                            value={ companyName }
                            onChange={ this.handleOnChange }
                            placeholder="Company Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={ email }
                            onChange={ this.handleOnChange }
                            placeholder="name@email.com" />
                    </Form.Group>

                    <Form.Group controlId="formBasicSubject">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            value={ subject }
                            onChange={ this.handleOnChange }
                            placeholder="Subject" />
                    </Form.Group>


                    <Form.Group controlId="formBasicMessage">
                        <Form.Label></Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="message"
                            value={ message }
                            onChange={ this.handleOnChange }
                            placeholder="Message" />
                    </Form.Group>

                    <Button variant="primary" type="submit" >Submit</Button>
                </Form>

                <Social />

                <div className='images'>
                    {/* <img className="bottom-img" src="https://bit.ly/2OmNqdV" alt="" /> */ }
                    {/* <img className="top-img" src="" alt="" /> */ }
                </div>


            </div>
        )
    }
}
