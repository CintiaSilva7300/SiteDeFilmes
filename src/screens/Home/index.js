import React from 'react';
import { Card, Carousel, Col, Container, Figure, Navbar, Row, MDBRow, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from './Img/ART-13038_I2s2B42z5D4r6QHqQHWJ.jpg';


function Home() {
    return (
        <div>
            <Link to="./">
                <img src={Img} width="150" height="170" />
            </Link>
            <Navbar.Text style={{ color: "white", fontSize: 30, fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
                Filmes, Series e desenhos Online|
            </Navbar.Text>
            {/* 
            <Row >
                <Col sm={3}>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={210}
                            alt="171x180"
                            src="https://ingresso-a.akamaihd.net/prd/img/movie/sonic-2/fde04f56-1afb-4c71-9ff2-97dac723f8d8.jpg"
                        />
                    </Figure>
                </Col>

                <Figure>
                    <Figure.Image
                        width={171}
                        height={210}
                        alt="171x180"
                        src="https://ingresso-a.akamaihd.net/prd/img/movie/sonic-2/fde04f56-1afb-4c71-9ff2-97dac723f8d8.jpg"
                    />
                </Figure>
            </Row> */}
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img style={{ height: 210, width: 171 }} variant="top" src="https://ingresso-a.akamaihd.net/prd/img/movie/sonic-2/fde04f56-1afb-4c71-9ff2-97dac723f8d8.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Img style={{ height: 210, width: 171 }} variant="top" src="https://ingresso-a.akamaihd.net/prd/img/movie/sonic-2/fde04f56-1afb-4c71-9ff2-97dac723f8d8.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default Home;