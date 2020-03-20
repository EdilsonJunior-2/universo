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
        curiosidade_planeta: ""
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log("teste");
        await api.post("/planetas", {
            nome_planeta: this.state.nome_planeta,
            tam_planeta: this.state.tam_planeta,
            massa_planeta: this.state.massa_planeta,
            gravidade_planeta: this.state.gravidade_planeta,
            comp_planeta: this.state.comp_planeta,
            curiosidade_planeta: this.state.curiosidade_planeta
        })

        this.props.history.push("/planetas")

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    render() {
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
                        <p>Curiosidade</p>
                        <textarea type="text"
                            placeholder="Curiosidade"
                            name="curiosidade_planeta"
                            onChange={this.handleChange}
                            value={this.state.curiosidade_planeta}
                        />
                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </>
        );
    }
}
