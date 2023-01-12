import React from "react";
import { Link } from "react-router-dom";

import './inscription.css'

class Inscription extends React.Component {
    render() {
        return (
            <div className="inscription">
                <Champs></Champs>
                <Link to='/' className="link">Annuler</Link>
                <Link to='/' className="link">Valider</Link>
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
          mdp: "",
          validMdp: false
        };
      }
    
    mdpChange=(event)=>{
        this.setState({
            mdp:event.target.value
        })
        if(event.target.value.length >= "8" && event.target.value.match(/[a-z]/) && event.target.value.match(/[A-Z]/) && event.target.value.match(/[0-9]/) && event.target.value.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
            this.setState({
                validMdp: true
            })
        }
    }

    render() {
        let lonColor = "red", minColor = "red", majColor = "red", chiColor = "red", carColor = "red";
        if(this.state.mdp.length >= "8")
        {
            lonColor='#FFEBBF';
        }
        if(this.state.mdp.match(/[a-z]/))
        {
            minColor="#FFEBBF";  
        }
        if(this.state.mdp.match(/[A-Z]/))
        {
            majColor="#FFEBBF"; 
        }
        if(this.state.mdp.match(/[0-9]/))
        {
            chiColor="#FFEBBF";
        }
        if(this.state.mdp.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/))
        {
            carColor="#FFEBBF";
        }

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
                    <input type='password' value={this.state.mdp} onChange={this.mdpChange} required></input>
                    <span>Mot de passe</span>
                </div>
                <div className="verif">
                    <p style={{color:lonColor}}>8 caractères</p>
                    <p style={{color:minColor}}>Minuscule</p>
                    <p style={{color:majColor}}>Majuscule</p>
                    <p style={{color:chiColor}}>Chiffre</p>
                    <p style={{color:carColor}}>Caractère spéciaux</p>
                </div>
            </div>
        )
    }
}

export default Inscription