import React, { Component } from 'react';
import "./styles.css";
import api from '../../../services/api';

export default class addsatelite extends Component {

    state = {
        nome_satelite: "",
        tam_satelite: null,
        massa_satelite: null,
        comp_satelite: ""
    }

    handleSubmit = async e => {
        e.preventDefault();
        await api.post("/satelites", {
            nome_SN: this.state.nome_satelite,
            tam_SN: this.state.tam_satelite,
            massa_SN: this.state.massa_satelite,
            comp_SN: this.state.comp_satelite
        })

        this.props.history.push("/satelitesNaturais") 
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
                        <h1>Adicionar satelite</h1>

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
