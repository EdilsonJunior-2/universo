import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Galaxias from "./pages/galaxias";
import Estrelas from "./pages/estrelas";
import SistemasPlanetarios from "./pages/sistemasPlanetarios";
import Planetas from "./pages/planetas";
import AnasBrancas from "./pages/anasBrancas";
import AnasVermelas from "./pages/anasVermelhas";
import GigantesAzuis from "./pages/gigantesAzuis";
import GigantesVermelhas from "./pages/gigantesVermelhas";
import SatelitesNaturais from "./pages/satelitesNaturais";
import EstrelasBinarias from "./pages/estrelasBinarias";
import AddPlaneta from "./pages/addplaneta";

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
                    <Route exact path="/estrelas" component={Estrelas} />
                    <Route exact path="/sistemasPlanetarios" component={SistemasPlanetarios} />
                    <Route exact path="/planetas" component={Planetas} />
                    <Route exact path="/anasBrancas" component={AnasBrancas} />
                    <Route exact path="/anasVermelhas" component={AnasVermelas} />
                    <Route exact path="/gigantesAzuis" component={GigantesAzuis} />
                    <Route exact path="/gigantesVermelhas" component={GigantesVermelhas} />
                    <Route exact path="/satelitesNaturais" component={SatelitesNaturais} />
                    <Route exact path="/estrelasBinarias" component={EstrelasBinarias} />
                    <Route exact path="/planetas/add" component={AddPlaneta} />
                </Switch>
            </BrowserRouter>
        )
    }
}