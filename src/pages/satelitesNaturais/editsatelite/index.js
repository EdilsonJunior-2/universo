import React, { Component } from 'react';
import api from '../../../services/api';
// import { Container } from './styles';

export default class editSatelite extends Component {

    state = {
        id: "",
        nome_satelite: "",
        tam_satelite: null,
        massa_satelite: null,
        comp_satelite: ""
    }

    componentDidMount() {
        this.selecionarSatelite();  
    }

    selecionarSatelite = async () => {
        const response = await api.get(`/satelites`);
        const satelite = response.data.satelites.find(satelites => satelites._id === this.props.match.params.id);
        this.setState({
            id: satelite._id,
            nome_satelite: satelite.nome_SN,
            tam_satelite: satelite.tam_SN,
            massa_satelite: satelite.massa_SN,
            comp_satelite: satelite.comp_SN
        })

        console.log(this.state);
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    handleSubmit = async e => {
        e.preventDefault();
        await api.post(`/satelites/edit/${this.state.id}`, {
            nome_SN: this.state.nome_satelite,
            tam_SN: this.state.tam_satelite,
            massa_SN: this.state.massa_satelite,
            comp_SN: this.state.comp_satelite
        })

        this.props.history.push("/satelitesNaturais");
    }

    render() {
        return (
            <>
                <div className="tela">
                    <form className="caixa-cadastro"
                        onSubmit={this.handleSubmit}>
                        <h1>Editar satelite</h1>

                        <p>Nome do satelite</p>
                        <input type="text"
                            placeholder="Nome"
                            name="nome_satelite"
                            onChange={this.handleChange}
                            value={this.state.nome_satelite}
                        />

                        <p>Área territorial</p>
                        <input type="number" step="any"
                            placeholder="Tamanho"
                            name="tam_satelite"
                            onChange={this.handleChange}
                            value={this.state.tam_satelite}
                        />

                        <p>Massa</p>
                        <input type="number" step="any"
                            placeholder="Massa"
                            name="massa_satelite"
                            onChange={this.handleChange}
                            value={this.state.massa_satelite}
                        />

                        <p>Composição</p>
                        <input type="text"
                            placeholder="Composição"
                            name="comp_satelite"
                            onChange={this.handleChange}
                            value={this.state.comp_satelite}
                        />

                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </>
        );
    }
}
