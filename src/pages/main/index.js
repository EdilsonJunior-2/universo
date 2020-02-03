import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Main extends Component {
    render() {
        return (
            <>
                <div className="tela">

                    <h1>Universe Database</h1>
                    <div className="apresentacao">
                        O objetivo de nosso sistema é armazenar dados sobre tudo o que acontece lá fora:
                        luas, planetas, estrelas, galáxias, sistemas, composição dos corpos estelares,
                        etc, e fazer a relação entre esses corpos.

                        <div className="cadastro-ou-login">
                            <p>
                                Cadastre-se <Link className="link" to="/cadastro">aqui</Link> e tenha acesso a dados sobre
                            os mais diversos corpos estelares.
    </p>
                            <p>
                                Já é cadastrado? acesse <Link className="link" to="/login">aqui</Link>.
    </p>
                        </div>

                    </div>

                    <div className="devs">Desenvolvedores:<br /> Edilson Leite Santos Junior;<br />João Ferreira dos Santos Neto.</div>

                </div>
            </>
        )
    }
}