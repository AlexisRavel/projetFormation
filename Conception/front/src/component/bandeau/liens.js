import React from "react";
import { Link } from "react-router-dom";

class Liens extends React.Component {
    render() {
        return (
            <div className='liens'>
                <Link to="/inscription" className="link">Inscription</Link>
                <Link to="/connexion" className="link">Connexion</Link>
            </div>
        )
    }
}


export default Liens