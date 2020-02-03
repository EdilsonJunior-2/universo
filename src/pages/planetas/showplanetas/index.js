import React, { Component } from 'react';
import api from "../../../services/api"
import { Link } from "react-router-dom";
import "./styles.css";

export default class planetas extends Component {

  state = {
    planetas: []
  };

  componentDidMount() {
    this.loadPlanetas();
  }

  loadPlanetas = async () => {
    const response = await api.get(`/planetas`);
    const planetas = response.data.planetas;
    console.log(response.data.planetas);
    this.setState({ planetas: planetas });
  }

  deletePlaneta = async (planeta) => {
    planeta = await api.get(`/planetas/del/${planeta._id}`);
    document.location.reload();
    console.log(planeta)
  }

  isnumber(tamanho) {
    if (tamanho == null) {
      return false;
    } else {
      return true;
    }
  }

  isstring(texto) {
    if (texto == "") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { planetas } = this.state;
    return (
      <>
        <div className="titulo-geral">
          Planetas
        </div>
        <div className="planetas">
          {planetas.map(planeta => (
            <div className="planeta" key={planeta._id}>
              <div className="nome">{planeta.nome_planeta}</div>
              <p>imagem vem aqui</p>
              {this.isnumber(planeta.massa_planeta) ? (
                <div className="dados">Massa: {planeta.massa_planeta} kg</div>
              ) : (
                  <div className="dados">Massa: desconhecida</div>
                )}
              {this.isnumber(planeta.tam_planeta) ? (
                <div className="dados">Área da superfície: {planeta.tam_planeta} km^2</div>
              ) : (
                  <div className="dados">Área da superfície: desconhecida</div>
                )}
              {this.isnumber(planeta.gravidade_planeta) ? (
                <div className="dados">Gravidade: {planeta.gravidade_planeta} m/s^2</div>
              ) : (
                  <div className="dados">Gravidade: desconhecida</div>
                )}
              {this.isstring(planeta.comp_planeta) ? (
                <div className="dados">Composição: {planeta.comp_planeta}</div>
              ) : (
                  <div className="dados">Composição: desconhecida</div>
                )}
                <br/>
              <div className="curiosidade">Curiosidade:</div>
            </div>
          ))}

        </div>
        <div className="botao-adicionar-geral"><Link to="/planetas/add">Adicionar Planeta</Link></div>
      </>
    );
  }
}