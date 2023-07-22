import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeRight() {
    return (
        <div>
            <div className='main'>
                <div className='mainL'>
                    <img src="/images/mainLogo.png" alt="" />
                </div>

            </div>
            <div>
                <h2 className='text-center'>Who Are We?</h2>
                <Row className='text-center'>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                </Row>
            </div>
        </div>

    )
}

export default HomeRight