import React from "react";
import { Link } from "react-router-dom";

import './panelAdmin.css';

class PanelAdmin extends React.Component {
    render() {
        return (
            <div className="panelAdmin">
                <Panneau></Panneau>
                <Gestion></Gestion>
            </div>
        )
    }
}

class Panneau extends React.Component {
    render() {
        return (
            <div className="panneau">
                <Link to='/' className="link"><h3>Retour sur le site</h3></Link>
                <div className="menuPanel">
                    <h4>Gestion des articles</h4>
                    <p>Nouvel article</p>
                    <p>Modifier un article</p>
                    <p>Supprimer un article</p>
                </div>
                <div className="menuPanel">
                    <h4>Gestion des sujets</h4>
                    <p>Afficher les sujets</p>
                    <p>Sujets non utilisés</p>
                </div>
                <div className="menuPanel">
                    <h4>Gestion des postes</h4>
                    <p>Poster un article</p>
                    <p>Déposter un article</p>
                </div>
            </div>
        )
    }
}

class Gestion extends React.Component {
    render() {
        return (
            <div className="gestion">
                <div className="top">
                    <h2>Top</h2>
                    <div className="topArticle">
                        <h2 onClick={() => this.props.redir('article')}>Titre article</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default PanelAdmin