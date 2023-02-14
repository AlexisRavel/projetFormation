import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './inscription.css'

class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mail: "",
          validMail: false,
          login: "",
          validLogin: false,
          mdp: "",
          validMdp: false,
          users: null
        };
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/users`)
                .then(res => {
                    this.setState({users: res.data["hydra:member"]})
                })
    }

    mailChange=(event)=>{
        this.setState({
            mail:event.target.value
        })
        var expressionReguliere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(event.target.value.match(expressionReguliere)) {
            this.setState({
                validMail: true
            })
        } else {
            this.setState({
                validMail: false
            })
        }
    }

    loginChange=(event)=>{
        this.setState({
            login:event.target.value
        })
        if(event.target.value.length < "4" || event.target.value.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
            this.setState({
                validLogin: false
            })
        } else {
            this.setState({
                validLogin: true
            })
        }
    }
    
    mdpChange=(event)=>{
        this.setState({
            mdp:event.target.value
        })
        if(event.target.value.length >= "8" && event.target.value.match(/[a-z]/) && event.target.value.match(/[A-Z]/) && event.target.value.match(/[0-9]/) && event.target.value.match(/[`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
            this.setState({
                validMdp: true
            })
        } else {
            this.setState({
                validMdp: false
            })
        }
    }

    validInscription=(event)=>{
        event.preventDefault()
        if(this.state.validMail == true && this.state.validLogin == true && this.state.validMdp == true) {
            const user = {
                mail: this.state.mail,
                login: this.state.login,
                mdp: this.state.mdp
            };
            
            for(let i=0; i<this.state.users.length; i++) {
                if(this.state.users[i].mail == user.mail) {
                    alert("Mail déjà utilisé");
                    return;
                }
                if(this.state.users[i].username == user.login) {
                    alert("Nom d'utilisateur déjà pris");
                    return;
                }
            }
        } else {
            alert("Informations incorrects")
        }
    }

    render() {
        let idColor = "#000000"
        if(this.state.validLogin == true) {
            idColor = "green"
        } else {
            idColor = "#000000"
        }

        let mdpColor = "#000000"
        if(this.state.validMdp == true) {
            mdpColor = "green"
        } else {
            mdpColor = "#000000"
        }

        let mailColor = "#000000"
        if(this.state.validMail == true) {
            mailColor = "green"
        } else {
            mailColor = "#000000"
        }

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
            <form onSubmit={this.validInscription}>
                <div className="inscription">
                    <div className="champs">
                        <div>
                            <input type='text' value={this.state.mail} onChange={this.mailChange} required></input>
                            <span style={{color:mailColor}}>Mail</span>
                        </div>
                        <div>
                            <input type='text' value={this.state.login} onChange={this.loginChange} required></input>
                            <span style={{color:idColor}}>Identifiants</span>
                        </div>
                        <div>
                            <input type='password' value={this.state.mdp} onChange={this.mdpChange} required></input>
                            <span style={{color:mdpColor}}>Mot de passe</span>
                        </div>
                        <div className="verif">
                            <p style={{color:lonColor}}>8 caractères</p>
                            <p style={{color:minColor}}>Minuscule</p>
                            <p style={{color:majColor}}>Majuscule</p>
                            <p style={{color:chiColor}}>Chiffre</p>
                            <p style={{color:carColor}}>Caractère spéciaux</p>
                        </div>
                    </div>
                    <Link to='/' className="link">Annuler</Link>
                    <input type="submit" value="Valider" className="submit"></input>
                </div>
            </form>
        )
    }
}


export default Inscription