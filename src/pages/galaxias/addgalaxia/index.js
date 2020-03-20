import React, { Component } from 'react';
import "./styles.css";
import api from '../../../services/api';

export default class addgalaxia extends Component {

    state = {
        nome_galaxia: "",
        idade_estrela: null,
        sistemas: null,
        qtd_sistemas: null,
        dist_terra: null,
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log("teste");
        await api.post("/galaxia", {
            nome_galaxia: this.state.nome_galaxia,
            sistemas: this.state.sistemas,
            qtd_sistemas: this.state.qtd_sistemas,
            dist_terra: this.state.dist_terra,
        })

        this.props.history.push("/galaxia")

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
                        <h1>Adicionar galaxia</h1>

                        <p>Nome da galaxia</p>
                        <input type="text"
                            placeholder="Nome"
                            name="nome_galaxia"
                            onChange={this.handleChange}
                            value={this.state.nome_galaxia}
                        />
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
