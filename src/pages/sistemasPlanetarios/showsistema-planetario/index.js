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
    const sistemasPlanetarios = response.data.sistemas_planetarios;
    console.log(response.data);
    this.setState({ sistemasPlanetarios: sistemasPlanetarios });
  }

  deleteSistemaPlanetario = async (sistemaPlanetario) => {
    sistemaPlanetario = await api.delete(`/sistemaPlanetario/del/${sistemaPlanetario._id}`);
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
        <div className="sistemaPlanetario">
                    {sistemasPlanetarios.map(sistemaPlanetario => (
                        <div className="sistemaPlanetario" key={sistemaPlanetario._id}>
                            <div className="nome">{sistemaPlanetario.nome_sistema}</div>
                            <div className="qtd">Quantidade de planetas pertencentes: {sistemaPlanetario.qtd_estrelas}</div>
                            <div className="qtd">Quantidade de estrelas pertencentes: {sistemaPlanetario.qtd_estrelas}</div>
                        </div>
                    ))}
                </div>
      </>
    );
  }
}