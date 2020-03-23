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
        <div className="sistemasPlanetarios">
                    {sistemasPlanetarios.map(sistemaPlanetario => (
                        <div className="sistemaPlanetario" key={sistemaPlanetario._id}>
                            <div className="nome">{sistemaPlanetario.nome_sistema}</div>
                            <div className="buttons">
                              <Link to={`sistemasPlanetarios/edit/${sistemaPlanetario._id}`}><button>Editar</button></Link>
                              <button onClick={() => this.deleteSistemaPlanetario(sistemaPlanetario)}>Excluir</button>
                            </div>
                            {this.isnumber(sistemaPlanetario.idade_sistema) ? (
                              <div className="dados">Idade: {sistemaPlanetario.idade_sistema}</div>
                            ) : (
                              <div className="dados">Idade: desconhecida</div>
                            )}
                            {this.isnumber(sistemaPlanetario.qtd_planetas) ? (
                              <div className="dados">Quantidade de planetas pertencentes: {sistemaPlanetario.qtd_planetas}</div>
                            ) : (
                              <div className="dados">Quantidade de planetas pertencentes: desconhecida</div>
                            )}
                            {this.isnumber(sistemaPlanetario.qtd_estrelas) ? (
                              <div className="dados">Quantidade de estrelas pertencentes: {sistemaPlanetario.qtd_estrelas}</div>
                            ) : (
                              <div className="dados">Quantidade de estrelas pertencentes: desconhecida</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="botao-adicionar-geral"><Link to="/sistemasPlanetarios/add">Adicionar Sistema</Link></div>
                <div className="botao-home"><Link to="/home">Voltar</Link></div>
      </>
    );
  }
}