import React from 'react';
import { Component } from 'react';

export default class Conversor extends Component {

  constructor(props) {
    super(props);

  {/* crio um estado que é um objeto*/}
    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }
  
    this.converter = this.converter.bind(this);
  }
  
  converter() {
    
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=dd4a3aceab22b960df05`;    
    
    async function getData() {
      const response = await fetch(url);
 
      const data = await response.json();
      const moedaAtual = data[de_para].toFixed(2);
      
      console.log(moedaAtual);

      return data[de_para];
    }

    getData();    
    
  }
  
  render() {
    return (
      <section className="conversor">
        <h3>Meu conversor de moedas</h3>
        <h4>{this.props.moedaA} para {this.props.moedaB}</h4>
        <input type="text" placeholder="Digite o valor" onChange={(event) => {this.setState({moedaA_valor: event.target.value})}}></input>        
        
        <input type="button" value="Converter" onClick={this.converter}></input>
        <h4>Valor convertido</h4>       
        
      </section>
    );
  }
}



{/*let moedaB_valor = parseFloat((moedaA_valor * cotacao).toFixed(2));
this.setState({moedaB_valor});*/}