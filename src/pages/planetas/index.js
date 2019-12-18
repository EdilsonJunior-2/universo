import React, { Component } from 'react';
import api from "../../services/api"
import { Link } from "react-router-dom"; 

// import { Container } from './styles';

export default class planetas extends Component {
  
  state = {
    planetas: []
  };

  loadPlanetas = async() => {
    console.log("teste");
    const response = await api.get(`/planetas`);
    console.log(response.data.planetas);
  }
  
  render() {
    return (
        <>
        <div className="tabela">
                Tabela de Planetas
                <Link to="/planetas/add">Adicionar Planeta</Link>
                <button onClick={this.loadPlanetas}>Teste</button>
        </div>
        </>
    );
  }
}
