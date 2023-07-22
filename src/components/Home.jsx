import React from 'react';
import HomeSlider from './HomeSlider';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeLeft from './HomeLeft';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={4}><HomeLeft /></Col>
        <Col lg={8}></Col>
        <Link to="/contact" className='descarga_la_app'>Download the app</Link>
      </Row>
      <Row>
        <Col><HomeSlider/></Col>
      </Row>
    </Container>



  )
}

export default Home