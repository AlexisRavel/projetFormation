import React from "react";

import './inscription.css'

class Inscription extends React.Component {
    annuler(page) {
        this.props.redirection(page)
    }

    render() {
        return (
            <div className="inscription">
                <Champs></Champs>
                <button onClick={() => this.annuler('accueil')}>Annuler</button>
                <button onClick={() => this.annuler('accueil')}>Valider</button>
            </div>
        )
    }
}

class Champs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mail: null,
          validMail: false,
          login: null,
          validLogin: false,
          mdp: null,
          validMdp: false
        };
      }

    render() {
        return (
            <div className="champs">
                <div>
                    <input type='text' required></input>
                    <span>Mail</span>
                </div>
                <div>
                    <input type='text' required></input>
                    <span>Identifiants</span>
                </div>
                <div>
                    <input type='password' required></input>
                    <span>Mot de passe</span>
                </div>
                <div className="verif">
                    <p>X Minuscule</p>
                    <p>X Majuscule</p>
                    <p>X Chiffre</p>
                    <p>X Caractère spéciaux</p>
                </div>
            </div>
        )
    }
}

export default Inscription