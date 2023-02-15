import React from "react";
import { Link, Navigate } from "react-router-dom";

import './panelAdmin.css';

class PanelAdmin extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        };
    }

    render() {
        let loggedInUser = JSON.parse(localStorage.getItem('user'));
        if(loggedInUser) {
            this.setState({
                user: loggedInUser
            })
            return (
                <div className="panelAdmin">
                    <Menu></Menu>
                    <Gestion></Gestion>
                </div>
            )
        } else {
            return <Navigate to="/connexion" replace={true}/>
        }
    }
}

class Menu extends React.Component {
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
                        <Link to="/article" className="link"><h2>Titre article</h2></Link>
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