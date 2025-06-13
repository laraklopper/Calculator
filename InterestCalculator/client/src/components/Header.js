import React from 'react'
// Bootstrap
import Row from 'react-bootstrap/Row';//Import the bootstrap Row component
import Col from 'react-bootstrap/Col';//Import the bootstrap Col component

//Header function component
export default function Header() {//Export default Header component

  //================JSX RENDERING==========
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
