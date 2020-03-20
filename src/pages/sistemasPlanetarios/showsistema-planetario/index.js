import React, { Component } from 'react';
import api from "../../../services/api"
import { Link } from "react-router-dom";
import "./styles.css";

export default class sistemasPlanetarios extends Component {

  state = {
    sistemasPlanetarios: []
  };

  componentDidMount() {
    this.loadSistemasPlanetarios();
  }

  loadSistemasPlanetarios = async () => {
    const response = await api.get(`/sistemasPlanetarios`);
    const sistemasPlanetarios = response.data.sistemasPlanetarios;
    console.log(response.data.sistemasPlanetarios);
    this.setState({ sistemasPlanetarios: sistemasPlanetarios });
  }

  deleteSistemaPlanetario = async (sistemaPlanetario) => {
    sistemaPlanetario = await api.delete(`/sistemasPlanetarios/del/${sistemaPlanetario._id}`);
    document.location.reload();
    console.log(sistemaPlanetario)
  }

  isnumber(tamanho) {
    if (tamanho === null) {
      return false;
    } else {
      return true;
    }
  }

  isstring(texto) {
    if (texto === "") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { sistemasPlanetarios } = this.state;
    return (
      <>
        <div className="titulo-geral">
          Sistemas Planetários
        </div>
        <div className="sistemasPlanetarios">
            {sistemasPlanetarios.map(sistemaPlanetario => (
                <div className="nome">{sistemaPlanetario.nome_sistema}</div>
            ))}
        </div>
        <div className="botao-adicionar-geral"><Link to="/planetas/add">Adicionar Planeta</Link></div>
        <div className="botao-home"><Link to="/home">Voltar</Link></div>
      </>
    );
  }
}