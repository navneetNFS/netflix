import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../netflix.svg'

export default function Header() {
    return HeaderWithoutLogin()
}

function HeaderWithoutLogin(){
    return (
        <>
            <header className='header_before_log'>
                <Container>
                    <Row>
                        <Col><span className='logo d-inline-block'><img src={logo} alt="Netflix" className='w-100' /></span></Col>
                        <Col className='text-end right_portion'>
                            <Link className='btn btn-primary btn-sm' style={{minWidth:"7.7rem"}}>Sign In</Link>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}