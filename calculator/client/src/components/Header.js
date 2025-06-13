import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
  return (
    <header className='header'>
        <Row className='headerRow'>
              <Col xs={6} md={4}>
                
              </Col>
              <Col xs={6} md={4} id='headCol'>
                <h1 id='heading'>CALCULATOR</h1>
            </Col>
              <Col xs={6} md={4}>

              </Col>
        </Row>
    </header>
  )
}
