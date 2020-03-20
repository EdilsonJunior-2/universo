import React, { Component } from 'react';
import api from "../../../services/api";

// import { Container } from './styles';

export default class editestrela extends Component {

    state = {
        id: "",
        nome_estrela: "",
        idade_estrela: null,
        distancia_terra: null,
        tipo_estrela: "Estrela normal",
        gravidade_estrela: null,
    }

    componentDidMount() {
        this.selecionarEstrela();
    }

    selecionarEstrela = async () => {
        const response = await api.get(`/estrelas`);
        const estrelas = response.data.estrelas.find(estrelas => estrelas._id === this.props.match.params.id);
        this.setState({
            id: estrelas._id,
            nome_estrela: estrelas.nome_estrela,
            idade_estrela: estrelas.idade_estrela,
            distancia_terra: estrelas.distancia_terra,
            tipo_estrela: estrelas.tipo_estrela,
            gravidade_estrela: estrelas.gravidade_estrela
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
        await api.put(`/estrela/edit/${this.state.id}`, {
            nome_estrela: this.state.nome_estrela,
            idade_estrela: this.state.idade_estrela,
            distancia_terra: this.state.distancia_terra,
            tipo_estrela: this.state.tipo_estrela,
            gravidade_estrela: this.state.gravidade_estrela
        })

        console.log(this.state.id);

        this.props.history.push("/estrelas")
    }

    render() {
        return (
            <>
                <div className="tela">
                    <form className="caixa-cadastro"
                        onSubmit={this.handleSubmit}>
                        <h1>Editar Estrela</h1>

                        <p>Nome do estrela</p>
                        <input type="text"
                            placeholder="Nome"
                            name="nome_estrela"
                            onChange={this.handleChange}
                            value={this.state.nome_estrela}
                        />
                        <p>Idade da estrela (Bilhões de anos)</p>
                        <input type="number" step="any"
                            placeholder="Idade"
                            name="idade_estrela"
                            onChange={this.handleChange}
                            value={this.state.idade_estrela}
                        />
                        <p>Distância pra Terra</p>
                        <input type="number" step="any"
                            placeholder="Distancia"
                            name="distancia_terra"
                            onChange={this.handleChange}
                            value={this.state.distancia_terra}
                        />
                        <p>Gravidade</p>
                        <input type="number" step="any"
                            placeholder="Gravidade"
                            name="gravidade_estrela"
                            onChange={this.handleChange}
                            value={this.state.gravidade_estrela}
                        />
                        
                        <p>Tipo da estrela</p>
                        <select
                            id="select"
                            defaultValue={null}
                            value={this.state.tipo_estrela}
                            onChange={e => this.setState({
                                tipo_estrela: e.target.value
                            })}
                        >
                            <option className="options" value="Estrela normal">Estrela normal</option>
                            <option className="options" value="Anã branca">Anã branca</option>
                            <option className="options" value="Anã vermelha">Anã vermelha</option>
                            <option className="options" value="Gigante azul">Gigante azul</option>
                            <option className="options" value="Gigante vermelha">Gigante vermelha</option>
                            <option className="options" value="Estrela binária">Estrela binária</option>
                        </select>
                        <button type="submit">Enviar</button>
                    </form>

                </div>

            </>);
    }
}
