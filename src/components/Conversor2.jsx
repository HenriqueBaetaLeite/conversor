import React, { Component } from "react";

import axios from 'axios';

export default class Conversor2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedaA_valor: 1,
      moedaB_valor: 0,
    };
  }

  converter = async () => {
    let convertion = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${convertion}&compact=ultra&apiKey=dd4a3aceab22b960df05`;

    await axios(url, { headers: { "Access-Control-Allow-Origin": "*", mode: 'no-cors' } })
      .then((res) => res.json())
      .then((json) => {
        const cotacao = json[convertion];
        const moedaAtual = this.state.moedaA_valor;
        let moedaB_valor = (moedaAtual * cotacao).toFixed(2).replace(".", ",");
        this.setState({ moedaB_valor });
      })
      .catch((err) => console.log("o erro foi: ", err));
  };

  render() {
    return (
      <div className='conversor'>
        <h4>
          {this.props.moedaA} para {this.props.moedaB}
        </h4>
        <input
          type='text'
          size='10'
          placeholder='digite valor...'
          onChange={(event) => {
            this.setState({ moedaA_valor: event.target.value });
          }}
        />
        <input
          className='button'
          type='button'
          value='converter'
          onClick={this.converter}
        />
        <h4>Valor convertido:</h4>
        <h4>${this.state.moedaB_valor}</h4>
      </div>
    );
  }
}
