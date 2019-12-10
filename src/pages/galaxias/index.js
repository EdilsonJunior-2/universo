import React, { Component } from 'react';
import "./styles.css";


// import { Container } from './styles';

export default class galaxias extends Component {

    render() {
        return (
            <>
                <div className="tabela">
                  Tabela de galaxias
                </div>
            </>
        );
    }
}

/*

  state = {
          personagens: []
      }
  
      componentDidMount() {
          this.loadPersonagens();
      }
  
      loadPersonagens = async () => {
          const response = await api.get(`/people`);
          const personagens = response.data.results;
          console.log(personagens);
  
          this.setState({ personagens: personagens });
      }



                <table className="striped">
                    <thead>
                        <th>Nome</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Ano de nascimento</th>
                        <th>Gênero</th>
                    </thead>
                    <tbody>
                        {personagens.map(personagem => (
                            <tr key={personagem.url}>
                                <td>{personagem.name}</td>
                                <td>{personagem.mass}</td>
                                <td>{personagem.height}</td>
                                <td>{personagem.birth_year}</td>
                                <td>{personagem.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>*/

/*
import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
*/