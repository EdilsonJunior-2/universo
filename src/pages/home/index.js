import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

export default class Home extends Component {
    render() {
        return (
            <>
                <FadeIn>
                    <div className="tela">
                        <h2>Seja bem vindo, Usuário!</h2>
                        <div className="botoes">
                            <Link to="/galaxias" className="opcoes">Galáxias</Link>
                            <Link to="/sistemasPlanetarios" className="opcoes">Sistemas Planetários</Link>
                            <Link to="/planetas" className="opcoes">Planetas</Link>
                            <Link to="/satelitesNaturais" className="opcoes">Satélites Naturais</Link>
                            <Link to="/estrelas" className="opcoes">Estrelas</Link>
                            <Link to="anasVermelhas" className="opcoes">Anãs Vermelhas</Link>
                            <Link to="anasBrancas" className="opcoes">Anãs Brancas</Link>
                            <Link to="/estrelasBinarias" className="opcoes">Estrelas Bináias</Link>
                            <Link to="/gigantesAzuis" className="opcoes">Gigantes Azuis</Link>
                            <Link to="/gigantesVermelhas" className="opcoes">Gigantes Vermelhas</Link>
                        </div>
                    </div>
                </FadeIn>
            </>
        )
    }
}