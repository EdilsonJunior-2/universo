import React, { Component } from 'react';
import "./styles.css";
import api from '../../../services/api';

export default class addsistemaplanetario extends Component {

    state = {
        nome_sistema: "",
        idade_sistema: null,
        id_planetas: [],
        id_estrelas: [],
        planetas: [],
        estrelas: [],
        planeta_selecionado: "",
        estrela_selecionada: ""
    }

    componentDidMount() {
        this.loadEstrelas();
        this.loadPlanetas();
    }
    
    loadEstrelas = async () => {
        const response = await api.get(`/estrelas`);
        const estrelas = response.data.estrelas;
        console.log(response.data.estrelas);
        this.setState({ estrelas: estrelas });
    }
    
    loadPlanetas = async () => {
        const response = await api.get(`/planetas`);
        const planetas = response.data.planetas;
        console.log(response.data.planetas);
        this.setState({ planetas: planetas });
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log("teste");
        await api.post("/sistemaPlanetario", {
            nome_sistema: this.state.nome_sistema,
            idade_sistema: this.state.idade_sistema,
            id_planetas: this.state.id_planetas,
            id_estrelas: this.state.id_estrelas
        })
        this.props.history.push("/sistemasPlanetarios")
    }

    adicionarPlaneta() {

        var existe = false;

        for(var posicao = 0; posicao < this.id_planetas.length; posicao++) {
            if(this.id_planetas[posicao] === this.planeta_selecionado) {
                existe = true;
                break;
            }
        }

        if(existe === false) {
            this.setState({ id_planetas: [this.state.planeta_selecionado, ...this.state.id_planetas]})
            console.log(this.id_planetas);
        }
    }

    adicionarEstrela() {

        var existe = false;

        for(var posicao = 0; posicao < this.id_estrelas.length; posicao++) {
            if(this.id_estrelas[posicao] === this.estrela_selecionada) {
                existe = true;
                break;
            }
        }

        if(existe === false) {
            this.setState({ id_estrelas: [this.state.estrela_selecionada, ...this.state.id_estrelas]})
            console.log(this.id_estrelas);
        }

    }

    render() {
        const { planetas } = this.state;
        const { estrelas } = this.state;
        return (
            <>
                <div className="tela">
                    <form className="caixa-cadastro"
                        onSubmit={this.handleSubmit}>
                        <h1>Adicionar Sistema Planetário</h1>

                        <p>Nome do Sistema</p>
                        <input type="text"
                            placeholder="Nome"
                            name="nome_sistema"
                            onChange={this.handleChange}
                            value={this.state.nome_sistema}
                        />
                        
                        <p>Idade do Sistema</p>
                        <input type="number" step="any"
                            placeholder="Idade"
                            name="idade_sistema"
                            onChange={this.handleChange}
                            value={this.state.idade_sistema}
                        />

                        <p>Planetas pertencentes</p>
                        <select
                            id="select"
                            defaultValue={null}
                            onChange={e => this.setState({
                                planeta_selecionado: e.target.value
                            })}
                        >
                            {planetas.map(planeta => (
                                <option className="options" value="planeta._id">{planeta.nome_planeta}</option>
                            ))}
                        </select>
                        <button onClick={() => this.adicionarPlaneta()}> Adicionar </button>

                        <p>Estrelas pertencentes</p>
                        <select
                            id="select"
                            defaultValue={null}
                            onChange={e => this.setState({
                                estrela_selecionada: e.target.value
                            })}
                        >
                            {estrelas.map(estrela => (
                                <option className="options" value="estrela._id">{estrela.nome_estrela}</option>
                            ))}
                        </select>
                        <button onClick={() => this.adicionarEstrela()}> Adicionar </button>

                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </>
        );
    }
}
