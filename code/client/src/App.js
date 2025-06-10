import React, { useState } from 'react'// Import the React module to use React functionalities
import './App.css'//Import stylesheets
// Bootstrap
import Container from 'react-bootstrap/Container';//Import bootstrap container
import Row from 'react-bootstrap/Row';//Import the bootstrap Row component
import Col from 'react-bootstrap/Col';//Import the bootstrap Col component
// Components
import Header from './components/Header';//Import Header component
import Calculator from './components/Calculator';//Import Calculator function component
import Button from 'react-bootstrap/Button';//Import Button component

// Main App component
export default function App() {
  // =========STATE VARIABLES========================
  // Declare state to control visibility of the Calculator
  const [openCalculator, setOpenCalculator] =useState(false)

  //=============EVENT LISTENERS=============

  // Function to toggle the visibility of the Calculator
  const toggleCalculator = () => {
    // Set state to the opposite of current state (toggle)
    setOpenCalculator(prev => !prev);
  }


  //================JSX RENDERING==================
  
  return (
    <>
      {/* Bootstrap container for layout */}
    <Container id='container'>
      {/* Header */}
        {/* Render the Header component */}
      <Header/>
      {/* Section 1: Calculator and output */}
      <section id='section1'>      
        <Row className='toggleBtn'>
          <Col className='toggleCol'>
              {/* Toggle button that changes text based on state */}
              <Button 
              variant='primary' 
              type='button' 
              id='toggleBtn' 
              onClick={toggleCalculator}
              aria-label='Toggle calculator display button'
              >
                {/* Button label toggles based on openCalculator state */}
                {openCalculator ? 'CLOSE CALCULATOR' : 'OPEN CALCULATOR'}
                </Button>
          </Col>
        </Row>
          {/* Row to conditionally render the Calculator component */}
            <Row id='calculatorDisplayRow'>
              <Col id='displayCol'>
                  {/* Show Calculator component only when openCalculator is true */}
                  {openCalculator && <Calculator />}
              </Col>
            </Row>     
          </section>
    </Container>
    </>
  )
}
