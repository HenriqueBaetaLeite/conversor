import React, { Component } from 'react';
import './App.css';
import Conversor2 from './components/Conversor2';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Conversor de Moedas</h1>
        <div className="container">
          <Conversor2 moedaA="AUD" moedaB="BRL"/>
          <Conversor2 moedaA="USD" moedaB="BRL"/>
          <Conversor2 moedaA="EUR" moedaB="BRL"/>
          <Conversor2 moedaA="BRL" moedaB="EUR" />
        </div>
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/henrique-ba%C3%AAta-leite-785a4b15a/">Henrique Baêta Leite</a>&copy;</p>
      </div>
    );
  }
}

export default App;
