import React, { Component } from 'react';
import api from "../../../services/api"
import { Link } from "react-router-dom";
import "./styles.css";

export default class satelites extends Component {

  state = {
    satelites: []
  };

  componentDidMount() {
    this.loadsatelites();
  }

  loadsatelites = async () => {
    const response = await api.get(`/satelites`);
    const satelites = response.data.satelites;
    console.log(response.data.satelites);
    this.setState({ satelites: satelites });
  }

  deletesatelite = async (satelite) => {
    satelite = await api.delete(`/satelite/del/${satelite._id}`);
    document.location.reload();
    console.log(satelite)
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
    const { satelites } = this.state;
    return (
      <>
        <div className="titulo-geral">
          Satelites Naturais
        </div>
        <div className="satelites">
          {satelites.map(satelite => (
            <div className="satelite" key={satelite._id}>
              <div className="nome">{satelite.nome_SN}</div>
              <div className="buttons">
                <Link to={`satelitesnaturais/edit/${satelite._id}`}><button>Editar</button></Link>
                <button onClick={() => this.deletesatelite(satelite)}>Excluir</button>
              </div>
              {this.isnumber(satelite.tam_SN) ? (
                <div className="dados">Tamanho: {satelite.tam_SN}</div>
              ) : (
                  <div className="dados">Tamanho: desconhecido</div>
                )}
              {this.isnumber(satelite.massa_SN) ? (
                <div className="dados">Massa: {satelite.massa_SN}</div>
              ) : (
                  <div className="dados">Massa: desconhecida</div>
                )}
              {this.isstring(satelite.comp_SN) ? (
                <div className="dados">Composição: {satelite.comp_SN}</div>
              ) : (
                  <div className="dados">Composição: desconhecido</div>
                )}
            </div>
          ))}
        </div>
        <div className="botao-adicionar-geral"><Link to="/satelitesnaturais/add">Adicionar satelite</Link></div>
        <div className="botao-home"><Link to="/home">Voltar</Link></div>
      </>
    );
  }
}