import React, { useState } from 'react'// Import the React module to use React functionalities
// Bootstrap
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component
import Row from 'react-bootstrap/Row';       // Import Bootstrap Row layout
import Col from 'react-bootstrap/Col';       // Import Bootstrap Column layout

//Calculator function component
export default function Calculator() {//Export default calculator function component
    //===========STATE VARIABLES==========
    const [principal, setPrincipal] = useState(0);//State to store the interest rate
    const [interestRate, setInterestRate] = useState(0); // State  used to store the interest rate
    const [timePeriod, setTimePeriod] = useState(0); // State used to store the time period
    const [totalInterest, setTotalInterest] = useState(0); // Stores the calculated total interest
  

    //=========EVENT LISTENERS==================
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

    // ===================JSX RENDERING==========================

    return (
        <div id='calculatorDisplay'>
            {/* Calculator */}
            <div id='calculator'>          
                {/* Principal Amount */}
                <Row className='labelRow'>
                    <Col className='labelCol'>
                        <label className='calculatorLabel' htmlFor='amountInput'>
                            <p className='labelText'>AMOUNT:</p>
                            <p className='para2'>R</p>
                            {/* Principal Amount input field */}
                            <input
                                id='amountInput'
                                type='number'
                                className='input'
                                autoComplete='off'
                                placeholder='0'
                                value={principal}
                                onChange={handlePrincipalChange}
                                step='0.01'
                                aria-label='principal amount input'
                            />
                        </label>
                    </Col>
                </Row>
                {/* Interest Rate*/}
                <Row className='labelRow'>
                    <Col className='labelCol'>
                        <label className='calculatorLabel' htmlFor='interestRateInput'>
                            <p className='labelText'>INTEREST:</p>
                            {/* Interest Rate input */}
                            <input
                                type='number'
                                id='interestRateInput'
                                className='input'
                                autoComplete='off'
                                placeholder='0'
                                value={interestRate}
                                onChange={handleInterestRateChange}
                                step='0.01'
                                aria-label='Interest Rate Input'
                            />
                        </label>
                    </Col>
                </Row>
                {/* Time Period*/}
                <Row className='labelRow'>
                    <Col className='labelCol'>
                        <label htmlFor='timeInput' className='calculatorLabel'>
                            <p className='labelText'>TIME:</p>
                            {/* Time Period Input */}
                            <input
                                type='number'
                                autoComplete='off'
                                className='input'
                                id='timeInput'
                                value={timePeriod}
                                onChange={handleTimePeriodChange}
                                step='0.01'
                                aria-label='Time input'
                            />
                            <p className='labelText'>Months</p>
                        </label>
                    </Col>
                </Row>
                {/* Button to trigger calculation */}
                <Row className='labelRow'>
                    <Col id='buttonCol'>
                        <Button
                            id='calBtn'
                            variant='success'
                            type='button'
                            onClick={calculateInterest}
                            aria-label='Calculate interest'
                        >
                            CALCULATE INTEREST
                        </Button>
                    </Col>
                </Row>
            </div>
            {/* Output display for calculated interest in Rand*/}
            <div id='interestOutput'>
                <Row>
                    <Col className='interestCol'>
                        <div id='totalInterest'>
                            <h6 className='interest'>INTEREST:</h6>
                            <h6 className='interest'><strong>R</strong></h6>
                            <h6 className='interest'>{totalInterest}</h6>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
    }
