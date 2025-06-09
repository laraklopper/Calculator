import React from 'react'
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Calculator from './components/Calculator';

const labels = [{
  amount: "PRINCIPAL AMOUNT",//props.amount
  interest: "INTEREST RATE",//props.interest
  time: "TIME PERIOD",//props.time
  id: "labelId"//Unique identifier
}]

export default function App() {
  return (
    <>
    <Container>
      <Header/>
      <section>
        <Calculator
        key={labels.id}
        amount={labels.amount}
        interest={labels.interest}
        time={labels.time}
        />
      </section>
    </Container>
    </>
  )
}
