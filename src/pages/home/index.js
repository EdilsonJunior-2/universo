import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="tela">
                    <h2>Seja bem vindo, Usuário!</h2>
                    <div className="botoes">
                        <Link to="/galaxias" className="opcoes">Galáxias</Link>
                        <Link className="opcoes">Sistemas Planetários</Link>
                        <Link className="opcoes">Planetas</Link>
                        <Link className="opcoes">Satélites Naturais</Link>
                        <Link className="opcoes">Estrelas</Link>
                        <Link className="opcoes">Anãs Vermelhas</Link>
                        <Link className="opcoes">Anãs Brancas</Link>
                        <Link className="opcoes">Estrelas Bináias</Link>
                        <Link className="opcoes">Gigantes Azuis</Link>
                        <Link className="opcoes">Gigantes Vermelhas</Link>
                    </div>
                </div>
            </>
        )
    }
}