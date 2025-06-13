import React from 'react'
// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Header function component
export default function Header() {

  //===============JSX RENDERING====================
  
  return (
    //Header
    <header className='header'>
        <Row className='headerRow'>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4} id='headCol'>
                <h1 id='heading'>CALCULATOR</h1>
            </Col>
              <Col xs={6} md={4}> </Col>
        </Row>
    </header>
  )
}
