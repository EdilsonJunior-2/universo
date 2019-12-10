import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Login extends Component {

      handleSubmit = () => {
          this.props.history.push('/home');
      }

    render() {
        return (
            <>
            <div className="tela">
                <form className="caixa-login"
                onSubmit={this.handleSubmit}>
                <h1>Seja bem vindo!</h1>
                <p>Login</p>
                <input type="text" placeholder="Nome"></input>
                <p>Senha</p>
                <input type="password" placeholder="Senha"></input>
                <button type="submit">Entrar</button>
                <p>Não é cadastrado ainda? Inscreva-se <Link className="link" to="/cadastro">aqui</Link></p>
                </form>
            </div>
            </>
        )
    }
}