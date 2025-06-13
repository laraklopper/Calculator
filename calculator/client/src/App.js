import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Calculator from './components/Calculator';

//
export default function App() {
  return (
    <>
      <Container>
        <Header/>
        <section id='section1'>
          <Calculator/>
        </section>
      </Container>
    </>
  )
}
