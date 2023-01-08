import React from "react";

import './panelAdmin.css';

class PanelAdmin extends React.Component {
    render() {
        return (
            <div className="panelAdmin">
                <Panneau redir={(page) => this.props.redirection(page)}></Panneau>
                <Gestion redir={(page) => this.props.redirection(page)}></Gestion>
            </div>
        )
    }
}

class Panneau extends React.Component {
    changePage(page) {
        this.props.redir(page)
    }

    render() {
        return (
            <div className="panneau">
                <h3 onClick={() => this.changePage('accueil')}>Retour sur le site</h3>
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
    changePage(page) {
        this.props.redir(page)
    }

    render() {
        return (
            <div className="gestion">
                <div className="top">
                    <h2>Top</h2>
                    <div className="topArticle">
                        <h2 onClick={() => this.changePage('article')}>Titre article</h2>
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