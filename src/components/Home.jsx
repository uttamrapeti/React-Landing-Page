import React from 'react';
import '../styles/Page.css';
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
        <Col lg={8}><HomeSlider /></Col>
        <Link to="/contact" className='descarga_la_app'>Download the app</Link>
      </Row>
    </Container>



  )
}

export default Home