import React, { Component } from 'react';
import api from "../../../services/api";

// import { Container } from './styles';

export default class editgalaxia extends Component {

    state = {
        nome_galaxia: "",
        id_sistemas: [],
        sistema_selecionado: "",
        sistemasPlanetarios: [],
        dist_terra: null
    }

    
    componentDidMount() {
        this.selecionarGalaxia();
        this.loadSistemasPlanetarios();
    }

    loadSistemasPlanetarios = async () => {
        const response = await api.get(`/sistemasPlanetarios`);
        const sistemasPlanetarios = response.data.sistemas_planetarios;
        console.log(response.data.sistemas_planetarios);
        this.setState({ sistemasPlanetarios: sistemasPlanetarios });
    }

    selecionarGalaxia = async () => {
        const response = await api.get(`/galaxias`);
        const galaxias = response.data.galaxias.find(galaxias => galaxias._id === this.props.match.params.id);
        this.setState({
            id: galaxias._id,
            nome_galaxia: galaxias.nome_galaxia,
            id_sistemas: galaxias.id_sistemas,
            sistema_selecionado: galaxias.sistema_selecionado,
            dist_terra: galaxias.dist_terra
        })

        console.log(this.state.id);
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    handleSubmit = async e => {
        e.preventDefault();
        console.log("teste");
        await api.put(`/galaxia/edit/${this.state.id}`, {
            nome_galaxia: this.state.nome_galaxia,
            id_sistemas: this.state.id_sistemas,
            sistema_selecionado: this.state.sistema_selecionado,
            dist_terra: this.state.dist_terra
        })

        console.log(this.state.id);

        this.props.history.push("/galaxias")
    }

    adicionarSistema() {
        this.setState({ id_sistemas: [this.state.sistema_selecionado, ...this.state.id_sistemas] })
        console.log(this.id_sistemas);
    }

    render() {
        const { sistemasPlanetarios } = this.state;
        return (
            <>
                <div className="tela">
                    <form className="caixa-cadastro"
                        onSubmit={this.handleSubmit}>
                        <h1>Editar Sistema Planetário</h1>

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
                    </form>

                </div>

            </>);
    }
}
