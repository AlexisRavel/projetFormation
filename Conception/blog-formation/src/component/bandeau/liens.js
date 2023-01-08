import React from "react";

class Liens extends React.Component {
    render() {
        return (
            <div className='liens'>
                <button onClick={() => this.props.nouvellePage('inscription')}>Inscription</button>
                <button onClick={() => this.props.nouvellePage('admin')}>Connexion</button>
            </div>
        )
    }
}


export default Liens