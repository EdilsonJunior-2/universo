import React, { Component } from 'react';
import api from "../../../services/api"
import { Link } from "react-router-dom";
import "./styles.css";

// import { Container } from './styles';

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

  render() {
    const { planetas } = this.state;
    return (
      <>
        <div className="titulo-geral">
          Tabela de Planetas
        </div>
        <div className="tabela">
          <table className="striped tabela-geral">
            <thead>
              <th>Nome</th>
              <th>Massa (kg)</th>
              <th>Área da superfície (km^2)</th>
              <th>Gravidade</th>
              <th>Composição</th>
              <th>Config</th>
            </thead>
            <tbody>
              {planetas.map(planeta => (
                <tr key={planeta._id}>
                  <td>{planeta.nome_planeta}</td>
                  <td>{planeta.massa_planeta}</td>
                  <td>{planeta.tam_planeta}</td>
                  <td>{planeta.gravidade_planeta}</td>
                  <td>{planeta.comp_planeta}</td>
                  <td>
                    <Link to={`planetas/edit/${planeta._id}`}><button>Editar</button></Link>
                    <button onClick={() => this.deletePlaneta(planeta)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
        <div className="botao-adicionar-geral"><Link to="/planetas/add">Adicionar Planeta</Link></div>
      </>
    );
  }
}
