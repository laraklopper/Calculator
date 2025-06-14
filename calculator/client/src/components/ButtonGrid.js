import React from 'react'
import './css/buttons.css'
// Bootstrap
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

//ButtonGrid function component
export default function ButtonGrid(
    {//PROPS PASSED FROM PARENT COMPONENT
        handleClick, 
        handleClear, 
        handleEquals
    }) {

    //=============JSX RENDERING=============

  return (
    <div className='buttons'>
        <Row id='btnRow1'>
              {/* Bootstrap stack for button layout */}
              <Stack id='buttonStack' gap={3}>
                  {/* Row 1: Calculator buttons for digits 7-9 and division */}
                  <div id='line1'>
                      {/* Button: 7 */}
                      <button
                          type='button'                      // Declares it as a clickable button
                          aria-label='Seven'                // Accessibility: screen reader will say "Seven"
                          className='numButton'                // Custom CSS class for styling
                          onClick={() => handleClick('7', 'Seven')} // Appends '7' to the expression with a live message
                      >
                          7
                      </button>
                      {/* Button: 8 */}
                      <button
                          type='button'// Declares it as a clickable button
                          aria-label='Eight'// Accessibility: screen reader will say "Eight"
                          className='numButton'// Custom CSS class for styling
                          onClick={() => handleClick('8', 'Eight')}// Appends '8' to the expression with a live message
                      >
                          8
                      </button>
                      {/* Button: 9 */}
                      <button
                          type='button' // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Nine'     // Accessibility: screen reader will say "Nine"
                          className='numButton'// Custom CSS class for styling
                          onClick={() => handleClick('9', 'Nine')}// Appends '9' to the expression with a live message
                      >
                          9
                      </button>
                      {/* Button: Divide */}
                      <button
                          type='button'             // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Divide'               // Accessibility label for screen reader
                          className='operationBtn'             // Custom class for consistent styling
                          onClick={() => handleClick('/', 'Divide')} // Appends '/' operator with a live message
                      >
                          /
                      </button>
                  </div>
                  {/* Row 2: Calculator buttons for digits 4-6 and multiplication */}
                  <div id='line2'>
                      {/* Button: 4 */}
                      <button
                          type='button'                          // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Four'                      // Screen reader will announce "Four"
                          className='numButton'                     // Custom class for consistent styling
                          onClick={() => handleClick('4', 'Four')} // Appends '8' to the expression with a live message
                      >
                          4
                      </button>
                      {/* Button: 5 */}
                      <button
                          type='button'         // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Five'      // Screen reader will announce "Five"
                          className='numButton'       //Custom class for consistent styling
                          onClick={() => handleClick('5', 'Five')} // Appends '5' to the input expression with a live message
                      >
                          5
                      </button>
                      {/* Button: 6 */}
                      <button
                          type='button' // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Six'  // Screen reader will announce "Six"
                          className='numButton'     // Custom class for consistent styling    
                          onClick={() => handleClick('6', 'Six')}// Appends '6' to the input expression with live message
                      >
                          6
                      </button>
                      {/* Button: Multiply */}
                      <button
                          type='button'    // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Multiply'                  // Announced as "Multiply" for accessibility
                          className='operationBtn'            // Custom class for consistent styling 
                          onClick={() => handleClick('*', 'Multiply')} // Appends multiplication operator to input with a live message
                      >
                          *
                      </button>
                  </div>
                  {/* Row 3: Calculator buttons for digits 1-3 and subtraction(minus)*/}
                  <div id='line3'>
                    {/* Button: 1 */}
                      <button 
                          type='button' // Declares it as a Clicakble button (prevents form submission)
                          aria-label='One' // Screen reader will announce "One"
                          className='numButton' // Custom class for consistent styling 
                          onClick={() => handleClick('1', 'One')} // Appends '1' to the input expression with live message
                        >
                            1
                            </button>
                      {/* Button: 2 */}
                      <button 
                          type='button' // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Two' // Screen reader will announce "Two"
                          className='numButton' // Shared styling class
                          onClick={() => handleClick('2', 'Two')}// Appends '2' to the input expression with live message
                      >
                        2
                        </button>
                        {/* Button: 3 */}
                      <button 
                          type='button' // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Three' // Screen reader will announce "Three"
                          className='numButton' // Shared styling class
                          onClick={() => handleClick('3', 'Three')} // Appends '3' to the input expression with live message
                      >
                        3
                        </button>
                        {/* Button: Minus */}
                      <button 
                          type='button' // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Minus' // Announced as "Minus" for accessibility
                          className='operationBtn' // Shared styling class
                          onClick={() => handleClick('-', 'Minus')}// Appends minus operator to input with a live message
                      >
                        -
                    </button>
                  </div>
                  {/* Row 3: Calculator buttons for 0, decimal, equals, and addition */}
                  <div id='line4'>
                      {/* Button: 0 */}
                      <button
                          type='button'                          // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Zero'                      // Accessibility label for screen readers
                          className='numButton'                     // Shared styling class
                          onClick={() => handleClick('0', 'Zero')} // Appends '0' to the input expression
                      >
                          0
                      </button>
                      {/* Button: Decimal Point */}
                      <button
                          type='button'    // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Decimal Point'             // Helps users with screen readers understand it's a decimal
                          className='operationBtn'                   // Shared styling class
                          onClick={() => handleClick('.', 'Decimal Point')} // Adds a decimal point to the input
                      >
                          .
                      </button>
                      {/* Button: Equals */}
                      <button
                          type='button'              // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Equals'                    // Accessibility label: announces "Equals"
                          className='operationBtn'                  // Shared styling class
                          onClick={handleEquals}                 // Triggers the calculation logic
                      >
                          =
                      </button>
                      {/* Button: Plus */}
                      <button
                          type='button'             // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Plus'                      // Accessibility label: announces "Plus"
                          className='operationBtn'                 // Shared styling class
                          onClick={() => handleClick('+', 'Plus')} // Appends '+' to the expression
                      >
                          +
                      </button>
                  </div>
                  {/* Row 4: Clear button */}
                  <div id='line5'>
                      {/* Button: Clear (C) */}
                      <button
                          type='button'                     // Declares it as a Clicakble button (prevents form submission)
                          aria-label='Clear Input and Output'    // Describes its function for screen readers
                          className='clearBtn'                   // Distinct styling for the clear button
                          onClick={handleClear}                  // Resets both input and result
                      >
                          C
                      </button>
                  </div>
              </Stack>
        </Row>
    </div>
  )
}
