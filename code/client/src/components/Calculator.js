import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';// Import Bootstrap Button component
import Row from 'react-bootstrap/Row';//import the bootstrap Row component
import Col from 'react-bootstrap/Col';//Import the bootstrap Col component

export default function Calculator() {
    const [principal, setPrincipal] = useState(0);//Stores the interest rate
    const [interestRate, setInterestRate] = useState(0); // Stores the interest rate
    const [timePeriod, setTimePeriod] = useState(0); // Stores the time period
    const [totalInterest, setTotalInterest] = useState(0); // Stores the calculated total interest
  

    // Event handler for principal input change
    function handlePrincipalChange(event) {
        setPrincipal(event.target.value);
    }

    // Event handler for interest rate input change
    function handleInterestRateChange(event) {
        setInterestRate(event.target.value);
    }

    // Event handler for time period input change
    function handleTimePeriodChange(event) {
        setTimePeriod(event.target.value);
    }

    // Function to calculate the interest
    function calculateInterest() {
        const interest = (principal * interestRate * timePeriod) / 100; // Calculate the interest
        setTotalInterest(interest); // Update the totalInterest state with the calculated interest
    }

    return (
        <div>
    <div id='calculator'>
            <Row className='labelRow'>
                {/* Input for principal amount */}
                <Col className='labelCol'>
                    <label className='calculatorLabel'>
                        <p className='labelText'>AMOUNT:</p><p className='para2'>R</p>
                    <input 
                    type='number' 
                    aria-label=''
                    className='input' 
                    placeholder='0' 
                    value={principal} 
                    onChange={handlePrincipalChange} 
                        step='0.01'
                    />                      
                    </label>
            </Col>              
            </Row>
            <Row className='labelRow'>
                <Col className='labelCol'>
                    <label className='calculatorLabel'>
                        <p className='labelText'>INTEREST:</p>
                    {/* Input for Interest rate */}
                    <input
                    placeholder='0'
                        step='0.01'
                    type='number' 
                    className='input' 
                    value={interestRate} 
                    onChange={handleInterestRateChange} 
                        />
                        </label>
                </Col>
              
            </Row>
                <Row className='labelRow'>
                <Col className='labelCol' >
                    {/* Input for the time period in months*/}
                    <label htmlFor='timeInput' className='calculatorLabel'>
                        <p className='labelText'>TIME:</p>
                    <input 
                    type='number' 
                        step='0.01'
                    id='timeInput'
                    className='input' 
                    value={timePeriod} 
                    onChange={handleTimePeriodChange} 
                    aria-label='time input'
                    />
                    <p className='labelText'>Months</p>
                    </label>
                </Col>              
            </Row>
            <Row className='labelRow'>
                <Col id='buttonCol'>
                    <Button 
                    onClick={calculateInterest} 
                    id='calBtn' 
                    variant='success' 
                    type='button'
                    aria-label='Calculate interest'
                    >
                        CALCULATE INTEREST
                        </Button>
                </Col>
            </Row>
            </div>
            <div id='interestOutput'>
            <Row>
                <Col className='interestCol'>
                    <div id='totalInterest'>
                        <h6 className='interest'>INTEREST:</h6>
                            <h6 className='interest'><strong>R</strong></h6>
                            <h6 className='interest'> {totalInterest}</h6>
                        </div>
                </Col>

            </Row>
    </div>
    </div>
  )
}
