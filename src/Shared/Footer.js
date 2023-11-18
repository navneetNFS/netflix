import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return FooterWithoutLogin()
}

function FooterWithoutLogin() {
    return (
        <>
            <footer className='without_login'>
                <Container>
                    <p>Questions? Call <Link to="callto: 000-800-919-1694">000-800-919-1694</Link></p>
                    <Row>
                        <Col lg={3} md={3} sm={3}>
                            <ul className='list-inline'>
                                <li className='list-inline-item d-block'><Link>FAQ</Link></li>
                                <li className='list-inline-item d-block'><Link>Investor Relations</Link></li>
                                <li className='list-inline-item d-block'><Link>Privacy</Link></li>
                                <li className='list-inline-item d-block'><Link>Speed Test</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <ul className='list-inline'>
                                <li className='list-inline-item d-block'><Link>Help Centre</Link></li>
                                <li className='list-inline-item d-block'><Link>Jobs</Link></li>
                                <li className='list-inline-item d-block'><Link>Cookie Preferences</Link></li>
                                <li className='list-inline-item d-block'><Link>Legal Notices</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <ul className='list-inline'>
                                <li className='list-inline-item d-block'><Link>Account</Link></li>
                                <li className='list-inline-item d-block'><Link>Ways to Watch</Link></li>
                                <li className='list-inline-item d-block'><Link>Corporate Information</Link></li>
                                <li className='list-inline-item d-block'><Link>Only on Netflix</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                            <ul className='list-inline'>
                                <li className='list-inline-item d-block'><Link>Media Centre</Link></li>
                                <li className='list-inline-item d-block'><Link>Terms of Use</Link></li>
                                <li className='list-inline-item d-block'><Link>Contact Us</Link></li>
                            </ul>
                        </Col>
                    </Row>

                    <span className='netflix_loc'>Netflix India</span>
                </Container>
            </footer>
        </>
    )
}