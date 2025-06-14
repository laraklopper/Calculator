import React, { useEffect, useState, useRef, useCallback } from 'react';
import { evaluate } from 'mathjs';
import './css/buttons.css'
// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import ButtonGrid from './ButtonGrid';

//Calculator function component
export default function Calculator() {
  //=========STATE VARIABLES==============
    const [input, setInput] = useState('') //State used to store current expression
    const [result, setResult] = useState('')// State used to store result of evaluation
    const [liveMessage, setLiveMessage] = useState('')// State used for screen reader feedback
 to handle number or operator input
    const handleClick = (value, label) => {
        setInput((prev) => prev + value);
      setLiveMessage(`${label} pressed`);
    }

    
    //Function to clear input and result
  const handleClear = () => {
    setInput('');
    setResult('');
    setLiveMessage('Calculator cleared');
  };
  

     const handleBackspace = () => {
      setInput((prev) => prev.slice(0, -1));
      setLiveMessage('Backspace pressed');
    };

  // Function to calculate the result using mathjs
  const handleEquals = useCallback(() => {
    try {
      const evalResult = evaluate(input); // Safely evaluates math expression
      setResult(evalResult);
      setLiveMessage(`Result is ${evalResult}`);
    } catch (error) {
      setResult('Error');
      setLiveMessage('Invalid expression');
    }
    const inputRef = useRef(null)// Ref for focusing 

    //===============EVENT LISTENERS==========================

    //Function
  },[input]);


    //======================================
    useEffect(() => {
      const handleKeyDown = (event) => {
        const { key } = event;

        if (/[0-9+\-*/.]/.test(key)) {
          handleClick(key, key);
        } else if (key === 'Enter' || key === '=') {
          handleEquals();
        } else if (key === 'Escape' || key.toLowerCase() === 'c') {
          handleClear();
        } else if (key === 'Backspace') {
          handleBackspace();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    },[handleEquals])

  // Auto-focus input on mount
    useEffect (() => {
     if (inputRef) {
       inputRef.current.focus()
     }
    },[])




    //=========JSX RENDERING===============
  return (
    // Calculator
    <div id='calculator' role='application' aria-labelledby='calc-heading'>
        {/* Output */}
      {/* Visually hidden heading for screen readers */}
      <h2 id='calc-heading' className='visually-hidden'>Calculator</h2>
      {/* Live region for  announcing actions */}
        <div
          aria-live='assertive'
          aria-atomic='true'
          className='visually-hidden'
        >
          {liveMessage}
        </div>
      {/* Calculator Output */}
        <div id='calculatorOutput'>
              <Row className='outputRow'>
                  <Col className='outputCol'>
            {/* Display current input expression */}
                    <input
                      type='text'                          // Input field (read-only)
                      aria-label='Current Expression'      // Accessibility: label for screen readers
                      value={input}                        // Controlled input: shows current expression
                      placeholder='0'                      // Placeholder when input is empty
                      readOnly                             // Prevent user typing directly
                      className='input'                    // Custom CSS class
                      ref={inputRef}                       // Ref for focus control
                      tabIndex={0}                         // Make input focusable via keyboard
                    />
                    {/* Display evaluated result */}
                    <div
                      id='result'                          // ID for styling or selection
                      aria-live='polite'                   // Accessibility: announce updates non-interruptively
                      aria-atomic='true'                   // Announce the entire content change
                      tabIndex={-1}                        // Not focusable via tab key
                    >
                      <h4 id='outputText'>={result}</h4>   {/* Result display with '=' prefix */}
                    </div>
                  </Col>
              </Row>
        </div>
        {/* Button Grid */}
        <ButtonGrid
        handleClear={handleClear}
        handleClick={handleClick}
        handleEquals={handleEquals}
        />
    </div>
  )
}
