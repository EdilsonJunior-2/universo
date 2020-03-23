import React, { Component } from 'react'
import api from "../../../services/api"
import { Link } from "react-router-dom"
import "./styles.css"

export default class galaxias extends Component {

    state = {
        galaxias: []
    };

    componentDidMount() {
        this.loadGalaxias();
    }

    loadGalaxias = async () => {
        const response = await api.get(`/galaxias`);
        const galaxias = response.data.galaxias;
        console.log(response.data.galaxias);
        this.setState({ galaxias: galaxias });
    }

    deleteGalaxia = async (galaxia) => {
        await api.delete(`/galaxia/del/${galaxia._id}`);
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
        const { galaxias } = this.state;
        return (
            <>
                <div className="titulo-geral">
                    Galaxias
                </div>
                <div className="galaxias">
                    {galaxias.map(galaxia => (
                        <div className="galaxia" key={galaxia._id}>
                            <div className="nome">{galaxia.nome_galaxia}</div>
                            <div className="buttons">
                                <Link to={`galaxias/edit/${galaxia._id}`}><button>Editar</button></Link>
                                <button onClick={() => this.deleteGalaxia(galaxia)}>Excluir</button>
                            </div>
                            {this.isnumber(galaxia.dist_terra) ? (
                                <div className="dados">Distancia pra Terra: {galaxia.dist_terra}</div>
                            ) : (
                                <div className="dados">Distancia pra Terra: desconhecida</div>
                            )}
                            {this.isnumber(galaxia.qtd_sistemas) ? (
                                <div className="dados">Quantidade de sistemas pertencentes: {galaxia.qtd_sistemas}</div>
                            ) : (
                                <div className="dados">Quantidade de sistemas pertencentes: desconhecida</div>
                            )} 
                        </div>
                    ))}
                </div>
                <div className="botao-adicionar-geral"><Link to="/galaxias/add">Adicionar Galaxia</Link></div>
                <div className="botao-home"><Link to="/home">Voltar</Link></div>
            </>
        )
    }
}