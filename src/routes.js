import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from "./pages/usuario/login";
import Main from "./pages/main";
import Cadastro from "./pages/usuario/cadastro";
import Home from "./pages/home";
import Galaxias from "./pages/galaxias";
import Estrelas from "./pages/estrelas";
import SistemasPlanetarios from "./pages/sistemasPlanetarios";
import Planetas from "./pages/planetas/showplanetas";
import AddPlaneta from "./pages/planetas/addplaneta";
import EditPlaneta from "./pages/planetas/editplaneta";
import SatelitesNaturais from "./pages/satelitesNaturais/showsatelites";
import AddSatelite from "./pages/satelitesNaturais/addsatelite";
import EditSatelite from "./pages/satelitesNaturais/editsatelite";
import AnasBrancas from "./pages/anasBrancas";
import AnasVermelas from "./pages/anasVermelhas";
import GigantesAzuis from "./pages/gigantesAzuis";
import GigantesVermelhas from "./pages/gigantesVermelhas";
import EstrelasBinarias from "./pages/estrelasBinarias";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

export default class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <PrivateRoute exact path="/login" component={Login} />
                    <PrivateRoute exact path="/cadastro" component={Cadastro} />
                    <PrivateRoute exact path="/home" component={Home} />
                    <PrivateRoute exact path="/galaxias" component={Galaxias} />
                    <PrivateRoute exact path="/estrelas" component={Estrelas} />
                    <PrivateRoute exact path="/sistemasPlanetarios" component={SistemasPlanetarios} />
                    <PrivateRoute exact path="/planetas" component={Planetas} />
                    <PrivateRoute exact path="/planetas/add" component={AddPlaneta} />
                    <PrivateRoute exact path="/planetas/edit/:id" component={EditPlaneta} />
                    <PrivateRoute exact path="/satelitesNaturais" component={SatelitesNaturais} />
                    <PrivateRoute exact path="/satelitesNaturais/add" component={AddSatelite} />
                    <PrivateRoute exact path="/satelitesNaturais/edit/:id" component={EditSatelite} />
                    <PrivateRoute exact path="/anasBrancas" component={AnasBrancas} />
                    <PrivateRoute exact path="/anasVermelhas" component={AnasVermelas} />
                    <PrivateRoute exact path="/gigantesAzuis" component={GigantesAzuis} />
                    <PrivateRoute exact path="/gigantesVermelhas" component={GigantesVermelhas} />
                    <PrivateRoute exact path="/estrelasBinarias" component={EstrelasBinarias} />
                    <Route path="*" component={() => <h1>Page not found</h1>} />
                </Switch>
            </BrowserRouter>
        )
    }
}