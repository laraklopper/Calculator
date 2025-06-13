import React, { useState } from 'react'
import './css/buttons.css'
//Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

//Calculator function component
export default function Calculator() {
    //========STATE VARIABLES====================
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    //===========EVENT LISTENERS==============================

    //Function to handle number or operator input
    const handleClick = (value) => {
        setInput((prev) => prev + value)
    }

    // Function to  clear input and result
    const handleClear = () => {
        setInput('');
        setResult('');
    };

    // Function to calculate the result
    const handleEquals = () => {
        try {
            const evalResult = eval(input); 
            setResult(evalResult);
        } catch (error) {
            setResult('Error');
        }
    };
    //=========JSX RENDERING===============
  return (
    // Calculator
    <div id='calculator'>
        {/* Output */}
        <div id='calculatorOutput'>
              <Row id='headerRow'>
                  <Col>
                  <input type='text' aria-label='output' value={input} placeholder='0' readOnly className='input'/>
                      <div id='result'><h4 id='outputText'>={result}</h4></div>
                  </Col>
              </Row>
        </div>
        {/* Buttons */}
       <div className='buttons'>
        <Row id='btnRow1'>
           {/*Bootstrap Stack for button layout*/}
                  <Stack id='buttonsStack' gap={3}>
                      <div id="line1">
                        <button type='button'  className='button' onClick={() => handleClick('7')}>7</button>
                          <button type='button' className='button' onClick={() => handleClick('8')}>8</button>
                          <button type='button' className='button' onClick={() => handleClick('9')}>9</button>
                          <button type='button' className='button' onClick={() => handleClick('/')}>/</button>
                        </div>
                      <div id='line2'>
                          <button type='button' className='button' onClick={() => handleClick('4')}>4</button>
                          <button className='button' type='button' onClick={() => handleClick('5')}>5</button>
                          <button className='button' type='button' onClick={() => handleClick('6')}>6</button>
                          <button className='button' type='button' onClick={() => handleClick('*')}>*</button>
                      </div>
                      <div id='line3'> 
                        <button type='button' className='button' onClick={() => handleClick('0')}>0</button>
                          <button type='button' className='button' onClick={() => handleClick('.')}>.</button>
                          <button type='button' className='button' onClick={handleEquals}>=</button>
                          <button type='button' className='button' onClick={() => handleClick('+')}>+</button>
                          </div>
                      <div id='line4'>                      
                        <button type='clear' aria-label='Button to clear input' className='clearBtn' onClick={handleClear}>C</button>
                      </div>
                  </Stack>            
        </Row>
       </div>
    </div>
  )
}
