import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { GiRss } from 'react-icons/gi';
import {FaFacebookF ,FaTwitter ,FaVideo ,FaPinterestP ,FaGooglePlusG ,FaConnectdevelop ,FaLinkedinIn ,FaYoutubeSquare} from 'react-icons/fa';

const Header = ({ cartItems }) => {
    return (
        <>
            <div className="header-all">
                <div className="header-top">
                    <Container fluid>
                        <Container>
                            <Row>

                                <Col sm={6} md={7}>
                                    <div className="header-top-left">
                                        <p className="info-text">OPTIONAL TOP NAVIGATION</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={5}>
                                    {/* <div className="header-top-right">
                                        <div className="lang-details">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-name'>
                                                    My Account
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="social-icon">
                                            <ul>
                                                <li>
                                                    <a herf="#!">
                                                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a herf="#!">
                                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a herf="#!">
                                                        <FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>

                                    </div> */}

                                    <GiRss size={20} pe-5/>
                                    <FaFacebookF size={20} pe-5/>
                                    <FaTwitter size={20} pe-5/>
                                    <FaVideo size={20} pe-5/>
                                    <FaPinterestP size={20} pe-5/>
                                    <FaGooglePlusG size={20} pe-5/>
                                    <FaConnectdevelop size={20} pe-5/>
                                    <FaLinkedinIn size={20} pe-5/>
                                    <FaYoutubeSquare size={20} pe-5/>





                                </Col>
                            </Row>
                        </Container>
                        </Container>
                </div>
                <div className="header-center">
                    <Container>
                        <Row>
                            <Col sm={6} lg={3}>
                                <div className="header-logo">
                                    <Link to="/">
                                        WP-SHOPKEEPER
                                    </Link>
                                </div>
                            </Col>
                            <Col sm={6} lg={9}>
                                <div className="header-contact-details">
                                    <Navbar expand="lg" >
                                        <Navbar.Toggle aria-controls="navbarScroll" />
                                        <Navbar.Collapse id="navbarScroll">
                                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                                <ul>
                                                    <li>
                                                        <Link to="/">HOME</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">SHOP DEMO</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">BLOG</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">TEMPLATES</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">LAYOUTS</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">THEME FEATURES</Link>
                                                    </li>
                                                   
                                                </ul>
                                            </Nav>
                                            <div className="cart-details">

                                                <Link to="/cart" className='cart' title='CART'>
                                                   BUY NOW
                                                    <span className='cart-lenght'>
                                                        {cartItems.lenght === 0 ? "" : cartItems.lenght}
                                                    </span>
                                                </Link>
                                            </div>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </>

    )
}


export default Header;