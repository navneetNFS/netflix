import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import bannerBg from '../Assets/images/banner-bg.jpg'

export default function HomeBannerComponent() {
    return (
        <>
            <section className='banner' style={{ backgroundImage: `url(${bannerBg})` }}>
                <Container>
                    <div className='banner_content'>
                        <h1 className='banner-title'>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
                        <h2 className='h3 second-title'>Watch anywhere. Cancel anytime.</h2>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='signinform'>
                            <div className='input-field'>
                                <Row>
                                    <Col lg={8} md={8} sm={7}>
                                        <TextField label="Email address" variant="filled" defaultValue={"navneettaneja.ds@gmail.com"} className='w-100 material_input not_outline' />
                                    </Col>
                                    <Col lg={4} md={4} sm={5}>
                                        <Button variant="primary" className='w-100 h-100 fs-18' onClick={() => console.log("Primary")}>Get Started <i className='fa fa-angle-right ms-2'></i></Button>
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
