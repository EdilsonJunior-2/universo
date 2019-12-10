import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Cadastro extends Component {
    render() {
        return (
            <>
                <div className="tela">
                    <div className="caixa-cadastro">
                        <h1>Seja bem vindo!</h1>
                        <p>Nome</p>
                        <input type="text" placeholder="Nome"></input>
                        <p>Sobrenome</p>
                        <input type="password" placeholder="Sobrenome"></input>
                        <p>Nickname</p>
                        <input type="text" placeholder="Nickname"></input>
                        <p>Email</p>
                        <input type="email" placeholder="email"></input>
                        <p>Senha</p>
                        <input type="password" placeholder="Senha"></input>
                        <p>Verifique sua senha</p>
                        <input type="password" placeholder="Senha"></input>
                        <button type="submit">Entrar</button>
                        <p>Já possui login? Entre <Link className="link" to="/login">aqui</Link></p>
                    </div>
                </div>
            </>
        )
    }
}