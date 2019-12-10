import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Galaxias from "./pages/galaxias";
import Estrelas from "./pages/estrelas";

export default class Routes extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/cadastro" component={Cadastro} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/galaxias" component={Galaxias} />
                    <Route path ="/home/estrelas" component={Estrelas} />
                </Switch>
            </BrowserRouter>
        )
    }
}