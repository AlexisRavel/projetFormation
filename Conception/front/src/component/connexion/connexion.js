import React from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import './connexion.css'

class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            validLogin: false,
            mdp: "",
            validMdp: false,
            user: null
        }
    }

    loginChange=(event)=> {
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

    mdpChange=(event)=> {
        this.setState({
            mdp:event.target.value
        })
        if(event.target.value.length < "1") {
            this.setState({
                validMdp: false
            })
        } else {
            this.setState({
                validMdp: true
            })
        }
    }

    validConnexion = async (event)=> {
        event.preventDefault()
        if(this.state.validLogin == true && this.state.validMdp == true) {
            const user = {
                login: this.state.login,
                mdp: this.state.mdp
            };
            
            const resp = await axios.post('http://127.0.0.1:8000/connexion', {"login": this.state.login, "mdp": this.state.mdp});
            this.setState({
                user: resp.data
            });
            localStorage.setItem('user', JSON.stringify(resp.data));
        } else {
            alert("Informations incorrects")
        }
    }

    render() {
        if(this.state.user) {
            return <Navigate to="/admin" replace={true}/>
        }
        return (
            <form onSubmit={this.validConnexion}>
                <div className="connexion">
                    <div className="champs">
                        <div>
                            <input type='text' value={this.state.login} onChange={this.loginChange} required></input>
                            <span>Login</span>
                        </div>
                        <div>
                            <input type='password' value={this.state.mdp} onChange={this.mdpChange} required></input>
                            <span>Mot de passe</span>
                        </div>
                    </div>
                    <Link to='/' className="link">Annuler</Link>
                    {(this.state.validLogin && this.state.validMdp) ?
                    <input type="submit" value="Se connecter" className="submit"></input> : 
                    <input type="submit" value="Se connecter" className="submit" disabled></input>}
                </div>
            </form>
        )
    }
}


export default Connexion;