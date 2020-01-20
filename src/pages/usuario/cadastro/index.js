import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import api from "../../../services/api"

export default class Cadastro extends Component {
    state = {
        usuario: "",
        email: "",
        senha: ""
    }

    handleSubmit =  async e => {
        e.preventDefault();
        console.log("teste");
        await api.post("/cadastro", {
            nome: this.state.usuario,
            email: this.state.email,
            senha: this.state.senha
        })

        this.props.history.push("/")

    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    render() {
        return (
            <>
                <div className="tela">
                    <div className="caixa-cadastro">
                        <h1>Seja bem vindo!</h1>
                        <form className="caixa-cadastro"
                        onSubmit={this.handleSubmit}>
                        <p>Usuario</p>
                        <input 
                        type="text" 
                        placeholder="Usuário"
                        name="usuario"
                        value={this.state.usuario}
                        onChange={this.handleChange}/>
                        <p>Email</p>
                        <input 
                        type="email" 
                        placeholder="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <p>Senha</p>
                        <input 
                        type="password" 
                        placeholder="Senha"
                        name="senha"
                        value={this.state.senha}
                        onChange={this.handleChange}
                        />
                        <button type="submit">Cadastrar</button>
                        
                        </form>
                        <p>Já possui login? Entre <Link className="link" to="/login">aqui</Link></p>
                    </div>
                </div>
            </>
        )
    }
}