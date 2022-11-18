import React from 'react';
import "../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Products = ({ productItems, handleAddProduct }) => {


    return (
        <Container fluid className='px-0 py-5 my-2 mx-0'>
            <div className='products-section py-1'>
                
       
        <Container>
            <div className='product-all'>
                <div className='product-title'>
                    <h2>Check out our Best-Selling Products</h2>
                   
                    <p className="text-center">Find out more great stuff in our <button type="button">Online Shop</button>
                    </p>
                </div>
                <div className='products-details'>
                    <Row>
                        {/* {productItems.map((productItems) => (

                            <Col sm={6} md={3}>
                                <div className='card-details'>
                                    <div>
                                        <img className='product-img' src={productItems.image} alt={productItems.name} />
                                    </div>
                                    <div className='product-cart-details'>
                                        <div className='product-txt'>
                                            <h6 className='product-name'>
                                                {productItems.name}
                                            </h6>
                                            <div className='product-price'><h4>${productItems.price}</h4></div>
                                        </div>

                                        <div>
                                            <button className='product-add-btn' onClick={() => handleAddProduct(productItems)}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        ))} */}




                        {productItems.slice(0,4).map((productItems) =>
                            <Col key={productItems.name}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={productItems.image} alt={productItems.name}/>
                                    <Card.Body>
                                        <Card.Title>{productItems.name}</Card.Title>
                                        <Card.Text>
                                            {/* {pro.icon} */}
                                        </Card.Text>
                                        {/* <Ratingstar rating={pro.rating} /> */}

                                        <Card.Text>
                                        ${productItems.price}
                                        </Card.Text>
                                        <Button  className='product-add-btn' onClick={() => handleAddProduct(productItems)}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>Add to Cart</Button>
                                    </Card.Body>
                                </Card>


                            </Col>
                        )}
                    </Row>
                </div>

            </div>
        </Container>
        </div>
        </Container>
        
    );
}

export default Products;
