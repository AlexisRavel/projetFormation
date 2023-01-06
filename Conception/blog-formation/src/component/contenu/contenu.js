import React from "react";

import './contenu.css'

class Contenu extends React.Component {
    redir(page) {
        this.props.nouvellePage(page)
    }

    render() {
        return (
            <div className="contenu">
                 <h2 onClick={() => this.redir('article')}>Titre article</h2>
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 onClick={() => this.redir('article')}>Titre article</h2>
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 onClick={() => this.redir('article')}>Titre article</h2>
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        )
    }
}


export default Contenu