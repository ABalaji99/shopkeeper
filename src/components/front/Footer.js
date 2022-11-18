import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


import { products } from '../back/Data/BlogProducts';



export default function Footer() {
    return (


        <div className="footer-contains container-fluid px-0 mx-0 g-0">

            <Container>
                <Row >
                    <Col md={3} col sm={12} className="prod-row" >
                        <div className="footer-logo-sec">
                            <h5>Best-Selling Products</h5>

                            {
                                products.slice(0,6).map((prod)=>(
                                    <Row className="prod-row">
                                        <Col className='prod-image'>
                                        <img src={prod.image} alt={prod.name}/>
                                        </Col>
                                        <Col>
                                        <h6>{prod.name}</h6>
                                        <p>${prod.price}</p>
                                        </Col>
                                    </Row>
                                ))
                            }

                            
                        </div>
                    </Col>
                    <Col md={3} col sm={12} className="prod-row" >
                        <div className="footer-logo-sec">
                            <h5>Limited-Time Offers</h5>

                            {
                                products.slice(0,6).map((prod)=>(
                                    <Row className="prod-row">
                                        <Col className='prod-image'>
                                        <img src={prod.image} alt={prod.name}/>
                                        </Col>
                                        <Col>
                                        <h6>{prod.name}</h6>
                                        <p>${prod.price}</p>
                                        </Col>
                                    </Row>
                                ))
                            }

                            
                        </div>
                    </Col>


            
                    <Col md={3} col sm={12}>
                        <div className="footer-links-details">
                            <h5>Archieves</h5>
                            <div className="news-details">
                                <ul>
                                    <li>November 2022</li>
                                    <li>October 2022</li>
                                    <li>September 2022</li>
                                    <li>August 2022</li>
                                    <li>July 2022</li>
                                    <li>June 2022</li>
                                    <li>April 2022</li>
                                    <li>March 2022</li>
                                    <li>February 2022</li>
                                    <li>January 2022</li>
                                    <li>December 2021</li>
                                    <li>November 2021</li>
                                    <li>October 2021</li>
                                    <li>September 2021</li>
                                    <li>August 2021</li>
                                    <li>July 2021</li>
                                  
                                   
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} col sm={12}>
                        <div className="footer-links-details">
                            <h5>Meta</h5>
                            <div className="news-details">
                            <ul>
                                    <li>Log In</li>
                                    <li>Entries RSS</li>
                                    <li>Comments RSS</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>




    )
}
