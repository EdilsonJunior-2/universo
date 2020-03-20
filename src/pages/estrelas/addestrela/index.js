import React, { Component } from 'react';
import "./styles.css";
import api from '../../../services/api';
import Select from 'react-select'

const options = [
    { value: 'edilson', label: 'Edilson' },
    { value: 'yves', label: 'Yves' },
    { value: 'marcelo', label: 'Marcelo' },
    { value: 'neto', label: 'Neto' }
]

export default class addestrela extends Component {

    state = {
        nome_estrela: "",
        idade_estrela: null,
        distancia_terra: null,
        tipo_estrela: "Estrela normal",
        gravidade_estrela: null,
    }

    teste(){
        console.log(this.state.tipo_estrela)
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log("teste");
        await api.post("/estrela", {
            nome_estrela: this.state.nome_estrela,
            idade_estrela: this.state.idade_estrela,
            distancia_terra: this.state.distancia_terra,
            tipo_estrela: this.state.tipo_estrela,
            gravidade_estrela: this.state.gravidade_estrela
        })

        this.props.history.push("/estrelas")

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
                        <h1>Adicionar estrela</h1>

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
                        {
                            /*                      
                            <p>Imagem</p>
                            <input type="text"
                            placeholder="Imagem"
                            name="img_estrela"
                            onChange={this.handleChange}
                            value={this.state.img_estrela}
                            />
                          */
                        }
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </>
        );
    }
}
