import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

// Images and Video Path
import tv from '../Assets/images/tv.png';
import tvVideo from '../Assets/video/tv-video.m4v';
import mobile from '../Assets/images/mobile.jpg';
import hotspot from '../Assets/images/mob-theme.png';
import downloadIcon from '../Assets/images/download-icon.gif';
import devices from '../Assets/images/devices.png';
import macVideo from '../Assets/video/anyware.m4v';
import kids from '../Assets/images/kids.png';

export default function HomeHighLightsComponent() {
    return (
        <>
            <section className='content_box'>
                <Container>
                    <Row>
                        <Col className='content_area'>
                            <h3 className='h2 content-title'>Enjoy on your TV</h3>
                            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </Col>
                        <Col>
                            <div className='tv'>
                                <img src={tv} alt="TV" className='w-100' />
                                <div className='video'>
                                    <video autoPlay loop>
                                        <source src={tvVideo} />
                                    </video>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='content_box'>
                <Container>
                    <Row>
                        <Col>
                            <div className='mobile'>
                                <img src={mobile} alt="TV" className='w-100' />
                                <div className="movie_info">
                                    <figure>
                                        <img src={hotspot} alt="movie name" />
                                    </figure>
                                    <div className='mob_content'>
                                        <strong>Stranger Things</strong>
                                        <span>Downloading...</span>
                                    </div>
                                    <div className='download_icon' style={{ backgroundImage: `url(${downloadIcon})` }}></div>
                                </div>
                            </div>
                        </Col>
                        <Col className='content_area'>
                            <h3 className='h2 content-title'>Download your shows to watch offline</h3>
                            <p>Save your favourites easily and always have something to watch.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='content_box'>
                <Container>
                    <Row>
                        <Col className='content_area'>
                            <h3 className='h2 content-title'>Watch everywhere</h3>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </Col>
                        <Col>
                            <div className='devices'>
                                <img src={devices} alt="TV" className='w-100' />
                                <div className='video'>
                                    <video autoPlay loop>
                                        <source src={macVideo} />
                                    </video>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='content_box last-item'>
                <Container>
                    <Row>
                        <Col>
                        <div className='kids'>
                            <img src={kids} alt="Kids" className='w-100' />
                        </div>
                        </Col>
                        <Col className='content_area'>
                            <h3 className='h2 content-title'>Create profiles for kids</h3>
                            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
