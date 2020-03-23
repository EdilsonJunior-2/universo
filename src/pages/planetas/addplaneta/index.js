import React, { Component } from 'react';
import "./styles.css";
import api from '../../../services/api';

export default class addplaneta extends Component {

    state = {
        nome_planeta: "",
        tam_planeta: null,
        massa_planeta: null,
        gravidade_planeta: null,
        comp_planeta: "",
        id_satelites: [],
        satelites: [],
        satelite_selecionado: ""
    }

    componentDidMount() {
        this.loadSatelites();
    }

    loadSatelites = async () => {
        const response = await api.get(`/satelites`);
        const satelites = response.data.satelites;
        console.log(response.data.satelites);
        this.setState({ satelites: satelites });
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log("teste");
        await api.post("/planeta", {
            nome_planeta: this.state.nome_planeta,
            tam_planeta: this.state.tam_planeta,
            satelite_selecionado: this.state.satelite_selecionado,
            massa_planeta: this.state.massa_planeta,
            gravidade_planeta: this.state.gravidade_planeta,
            comp_planeta: this.state.comp_planeta,
            id_satelites: this.state.id_satelites
        })

        this.props.history.push("/planetas")

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    adicionarSatelite() {
        this.setState({ id_satelites: [this.state.satelite_selecionado, ...this.state.id_satelites]})
        console.log(this.id_satelites);
        /*

        var existe = false;

        for(var posicao = 0; posicao < this.id_satelites.length; posicao++) {
            if(this.id_satelites[posicao] === this.satelite_selecionado) {
                existe = true;
                break;
            }
        }

        if(existe === false) {
            this.setState({ id_satelites: [this.state.satelite_selecionado, ...this.state.id_satelites]})
            console.log(this.id_satelites);
        }
        */

    }

    render() {
        const { satelites } = this.state;
        return (
            <>
                <div className="tela">
                    <form className="caixa-cadastro"
                        onSubmit={this.handleSubmit}>
                        <h1>Adicionar Planeta</h1>

                        <p>Nome do Planeta</p>
                        <input type="text"
                            placeholder="Nome"
                            name="nome_planeta"
                            onChange={this.handleChange}
                            value={this.state.nome_planeta}
                        />

                        <p>Área territorial</p>
                        <input type="number" step="any"
                            placeholder="Tamanho"
                            name="tam_planeta"
                            onChange={this.handleChange}
                            value={this.state.tam_planeta}
                        />

                        <p>Massa</p>
                        <input type="number" step="any"
                            placeholder="Massa"
                            name="massa_planeta"
                            onChange={this.handleChange}
                            value={this.state.massa_planeta}
                        />

                        <p>Gravidade</p>
                        <input type="number" step="any"
                            placeholder="Gravidade"
                            name="gravidade_planeta"
                            onChange={this.handleChange}
                            value={this.state.gravidade_planeta}
                        />

                        <p>Composição</p>
                        <input type="text"
                            placeholder="Composição"
                            name="comp_planeta"
                            onChange={this.handleChange}
                            value={this.state.comp_planeta}
                        />

                        <p>Satélites</p>
                        <select
                            id="select"
                            defaultValue={null}
                            onChange={e => this.setState({
                                satelite_selecionado: e.target.value
                            })}
                        >
                            {satelites.map(satelite => (
                                <option className="options" value={satelite._id}>{satelite.nome_SN}</option>
                            ))}
                        </select>
                        <button onClick={() => this.adicionarSatelite()}> Adicionar </button>
                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </>
        );
    }
}
