import React from 'react';
import './App.css';
import Conversor2 from './components/Conversor2';

const App = () => {
  return (
    <div className="main">
      <h1>Conversor de Moedas</h1>
      <div className="container">
        <Conversor2 moedaA="USD" moedaB="BRL" />
        <Conversor2 moedaA="EUR" moedaB="BRL" />
        <Conversor2 moedaA="BRL" moedaB="USD" />
        <Conversor2 moedaA="BRL" moedaB="EUR" />
      </div>
      <p>
        Esse App utiliza a API{' '}
        <a href="https://www.currencyconverterapi.com/" target="_blank" rel="noopener noreferrer">
          Free Current Conversor
        </a>
        , os valores são atualizados a cada 60 minutos.
      </p>
      <p className="subtitle">
        Legenda: <br />
        USD - dolar U$ <br />
        BRL - real R$ <br />
        EUR - euro &euro; <br />
      </p>
      <p>
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/henriquebaetaleite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrique Baêta Leite
        </a>
        &copy; 2020
      </p>
    </div>
  );
};

export default App;
