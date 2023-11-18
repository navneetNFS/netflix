import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import FaqListPartial from '../Partials/FaqListPartial';

export default function HomeFaqComponent() {
    return (
        <>
            <section className='faq_section'>
                <Container>
                    <h3 className='h2 text-center content-title'>Frequently Asked Questions</h3>
                    <FaqListPartial />
                    <div className='ready_watch'>
                        <p className='text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='signinform mx-auto'>
                            <div className='input-field'>
                                <Row>
                                    <Col lg={8} md={8} sm={7}>
                                        <TextField label="Email address" variant="filled" defaultValue={"navneettaneja.ds@gmail.com"} className='w-100 material_input not_outline' />
                                    </Col>
                                    <Col lg={4} md={4} sm={5}>
                                        <Button variant="primary" className='w-100 h-100' onClick={() => console.log("Primary")}>Get Started <i className='fa fa-angle-right'></i></Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
