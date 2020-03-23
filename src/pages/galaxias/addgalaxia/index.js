import React, { Component } from 'react';
import "./styles.css";
import api from '../../../services/api';

export default class addgalaxia extends Component {

    state = {
        nome_galaxia: "",
        id_sistemas: [],
        sistema_selecionado: "",
        sistemasPlanetarios: [],
        qtd_sistemas: null,
        dist_terra: null
    }

    componentDidMount() {
        this.loadSistemasPlanetarios();
    }

    loadSistemasPlanetarios = async () => {
        const response = await api.get(`/sistemasPlanetarios`);
        const sistemasPlanetarios = response.data.sistemasPlanetarios;
        console.log(response.data.sistemasPlanetarios);
        this.setState({ sistemasPlanetarios: sistemasPlanetarios });
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log("teste");
        await api.post("/sistemaPlanetario", {
            nome_galaxia: this.state.nome_galaxia,
            id_sistemas: this.state.id_sistemas,
            sistema_selecionado: this.state.sistema_selecionado,
            qtd_sistemas: this.state.qtd_sistemas,
            dist_terra: this.state.dist_terra
        })
        this.props.history.push("/sistemasplanetarios")
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    adicionarSistema() {
        this.setState({ id_sistemas: [this.state.sistema_selecionado, ...this.state.id_sistemas] })
        console.log(this.id_sistemas);
    }

    render() {
        const { sistemasPlanetarios } = this.state;
        return (
            <>
                <div className="tela">
                    <div className="caixa-cadastro"
                        onSubmit={this.handleSubmit}>
                        <h1>Adicionar Galáxia</h1>
                        
                        <p>Nome da Galáxia</p>
                        <input type="text"
                            placeholder="Nome"
                            name="nome_galaxia"
                            onChange={this.handleChange}
                            value={this.state.nome_galaxia}
                        />

                        <p>Distancia até a Terra</p>
                        <input type="number" step="any"
                            placeholder="Distancia até a Terra"
                            name="dist_terra"
                            onChange={this.handleChange}
                            value={this.state.dist_terra}
                        />
                        <p>Sistemas Planetários</p>
                        <select
                            id="select"
                            defaultValue={null}
                            onChange={e => this.setState({
                                sistema_selecionado: e.target.value
                            })}
                        >
                            {sistemasPlanetarios.map(sistemaPlanetario => (
                                <option className="options" value={sistemaPlanetario._id}>{sistemaPlanetario.nome_sistema}</option>
                            ))}
                        </select>
                        <button onClick={() => this.adicionarSistema()}> Adicionar </button>
                        <button type="submit" onClick={() => this.handleSubmit()}>Enviar</button>
                    </div>
                </div>
            </>
        )
    }
}
