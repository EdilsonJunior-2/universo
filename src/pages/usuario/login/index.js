import React, { Component } from "react";
import "./styles.css";
import { Link, withRouter } from "react-router-dom";
import api from "../../../services/api";
import { login } from "../../../services/auth";

class Login extends Component {

    state = {
        nome: "",
        senha: "",
        erro: ""
    }

    handleSingIn = async e => {
        e.preventDefault();
        const { nome, senha } = this.state;
        if (!nome || !senha) {
            console.log("asf")
            this.setState({ erro: "Preencha email e senha para continuar" });
        }
        else {
            try {
                console.log("kkk");
                const response = await api.post("/login", { nome, senha });
                console.log(response.data)
                console.log(nome)
                login(response.data.token);
                window.localStorage.setItem( 'usuario', nome );
                this.props.history.push("/home");
            } catch (err) {
                this.setState({
                    erro: "Houve um problema com o login, verifique suas credenciais."
                })
            }
        }
    }

    render() {
        return (
            <>
                <div className="tela">
                    <form className="caixa-login"
                        onSubmit={this.handleSingIn}>
                        <h1>Seja bem vindo!</h1>
                        <p>Login</p>
                        <input
                            type="text"
                            placeholder="Usuario"
                            onChange={e => this.setState({ nome: e.target.value })}
                        />
                        <p>Senha</p>
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ senha: e.target.value })}
                        />
                        <button type="submit">Entrar</button>
                        <p>Não é cadastrado ainda? Inscreva-se <Link className="link" to="/cadastro">aqui</Link></p>
                    </form>
                </div>
            </>
        )
    }
}

export default withRouter(Login);