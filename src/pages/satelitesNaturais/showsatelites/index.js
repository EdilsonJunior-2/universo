import React, { Component } from 'react';
import api from "../../../services/api";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default class satelitesNaturais extends Component {

  state = {
    satelitesNaturais: []
  };

  componentDidMount() {
    this.loadSatelites();
  }


  loadSatelites = async () => {
    const response = await api.get(`/satelites`);
    const satelites = response.data.satelites;
    console.log(response.data);
    this.setState({ satelitesNaturais: satelites });
  }

  deleteSatelite = async (satelite) => {
    satelite = await api.get(`/satelites/del/${satelite._id}`);
    document.location.reload();
  }

  render() {
    const { satelitesNaturais } = this.state;
    return (
      <>
        <div className="tela-planetas">
          Tabela de Satélites
                <Link to="/satelitesNaturais/add">Adicionar Satélite</Link>
        </div>
        <div className="tabela">
          <table className="striped">
            <thead>
              <th>Nome</th>
              <th>Massa (kg)</th>
              <th>Área da superfície (km^2)</th>
              <th>Composição</th>
              <th>Planeta</th>
              <th>Config</th>
            </thead>
            <tbody>
              {satelitesNaturais.map(satelite => (
                <tr key={satelite._id}>
                  <td>{satelite.nome_SN}</td>
                  <td>{satelite.massa_SN}</td>
                  <td>{satelite.tam_SN}</td>
                  <td>{satelite.comp_SN}</td>
                  <td>{satelite.planeta.nome_planeta}</td>
                  <td>
                    <Link to={`satelitesNaturais/edit/${satelite._id}`}><button>Editar</button></Link>
                    <button onClick={() => this.deleteSatelite(satelite)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

/*       {planetas.map(planeta => (
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
       ))}*/