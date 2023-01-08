import React from 'react'

import './article.css'
import Liens from '../bandeau/liens'

class ArticleTemplate extends React.Component {
    changePage(page) {
        this.props.redirection(page)
    }

    render() {
        return (
            <div>
                <div className='bandeauArticle'>
                    <Liens nouvellePage={(page) => this.changePage(page)}></Liens>
                    <Titre></Titre>
                </div>
                <div className='contenuArticle'>
                    <button onClick={() => this.changePage('accueil')}>➜</button>
                    <h2>Sous-Titre</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        )
    }
}

function Titre() {
    return <h1>Titre Article</h1>
  }


export default ArticleTemplate