import React from 'react'
import Row from 'react-bootstrap/Row';//import the bootstrap Row component
import Col from 'react-bootstrap/Col';//Import the bootstrap Col component

export default function Header() {

    return (
    <header id='header'>
          <Row className='headRow'>
              <Col className='headCol'>
                <h1 id='heading'>INTEREST CALCULATOR</h1>
             </Col>
          </Row>
    </header>
  )
}
