import React from "react";

class Liens extends React.Component {
    redir(page) {
        this.props.nouvellePage(page)
    }

    render() {
        return (
            <div className='liens'>
                <button onClick={() => this.redir('inscription')}>Inscription</button>
                <button  onClick={() => this.redir('admin')}>Connexion</button>
            </div>
        )
    }
}


export default Liens