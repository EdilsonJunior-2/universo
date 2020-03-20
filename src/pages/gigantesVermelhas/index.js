import React, { Component } from 'react';
import api from "../../services/api"
import { Link } from "react-router-dom";
import "./styles.css";

export default class gigantesVermelhas extends Component {
    
    state = {
        estrelas: []
    };

    componentDidMount() {
        this.loadEstelas();
    }

    loadEstelas = async () => {
        const response = await api.get(`/gigantesVermelhas`);
        const gigantesVermelhas = response.data.gigantes_vermelhas;
        console.log(gigantesVermelhas);
        this.setState({ estrelas: gigantesVermelhas });
    }

    deleteEstrela = async (estrela) => {
        await api.delete(`/estrela/del/${estrela._id}`);
        document.location.reload();
    }

    isnumber(tamanho) {
        if (tamanho === null) {
            return false;
        } else {
            return true;
        }
    }

    isstring(texto) {
        if (texto === "") {
            return false;
        } else {
            return true;
        }
    }

    render() {
        const { estrelas } = this.state;
        return (
            <>
                <div className="titulo-geral">
                    Gigantes Vermelhas
                </div>
                <div className="estrelas">
                    {estrelas.map(estrela => (
                        <div className="estrela" key={estrela._id}>
                            <div className="nome">{estrela.nome_estrela}</div>
                            <div className="buttons">
                                <Link to={`estrelas/edit/${estrela._id}`}><button>Editar</button></Link>
                                <button onClick={() => this.deleteEstrela(estrela)}>Excluir</button>
                            </div>
                            {this.isnumber(estrela.idade_estrela) ? (
                                <div className="dados">Idade: {estrela.idade_estrela} bilhões de anos</div>
                        ) : (
                                    <div className="dados">Idade: desconhecida</div>
                                )}
                            {this.isnumber(estrela.distancia_terra) ? (
                                <div className="dados">Distancia até a Terra: {estrela.distancia_terra}</div>
                            ) : (
                                    <div className="dados">Distancia até a Terra: desconhecida</div>
                                )}
                            {this.isstring(estrela.tipo_estrela) ? (
                                <div className="dados">Tipo: {estrela.tipo_estrela}</div>
                            ) : (
                                    <div className="dados">Tipo: desconhecida</div>
                                )}
                            {this.isnumber(estrela.gravidade_estrela) ? (
                                <div className="dados">Gravidade: {estrela.gravidade_estrela}</div>
                            ) : (
                                    <div className="dados">Gravidade: desconhecida</div>
                                )}
                        </div>
                    ))}
                </div>
                <div className="botao-adicionar-geral"><Link to="/estrelas/add">Adicionar Estrela</Link></div>
                <div className="botao-home"><Link to="/home">Voltar</Link></div>
            </>
        )
    }
}