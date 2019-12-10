import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Main extends Component {
    render() {
        return (
            <>
                <div className="tela">
                    <h1>Centro de Cosmologia Mundial</h1>

                    <div className="apresentacao">
                        O CCM é uma ONG que foi fundada em  parceria  com  o governo brasileiro,
                        com o intuito de armazenar e processar dados sobre o Universo.
                        Esses dados são compartilhados publicamente por todo o mundo
                        com diversas empresas e instituições, para desenvolvimento de pesquisas,
                        contribuição com a educação e etc.
<br />
                        Nosso sistema é capaz de armazenar dados sobre tudo o que acontece lá fora:
                        luas, planetas, estrelas, galáxias, sistemas, composição dos corpos estelares,
                        etc, e o mesmo faz ainda faz a relação entre esses corpos.
</div>

                    <div className="cadastro-ou-login">
                        <p>
                            Cadastre-se <Link className="link" to="/cadastro">aqui</Link> e tenha acesso a dados sobre
                        os mais diversos corpos estelares.
    </p>
                        <p>
                            Já é cadastrado? acesse <Link className="link" to="/login">aqui</Link>.
    </p>
                    </div>

                    <div className="devs">Desenvolvedores:<br /> Edilson Leite Santos Junior;<br />João Ferreira Neto.</div>

                </div>
            </>
        )
    }
}