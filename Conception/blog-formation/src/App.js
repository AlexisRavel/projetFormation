import React from 'react';

import './App.css';

import Liens from './component/bandeau/liens';
import Sujets from './component/bandeau/sujets';
import Contenu from './component/contenu/contenu';
import Inscription from './component/inscription/inscription';
import ArticleTemplate from './component/article/articleTemplate';
import PanelAdmin from './component/admin/panelAdmin';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aff: 'test',
    };
  }

  render() {
    switch (this.state.aff) {
      case 'accueil':
        return (<Accueil redirection={(page) => this.setState({aff: page})}></Accueil>)
      case 'inscription':
        return (<Inscription redirection={(page) => this.setState({aff: page})}></Inscription>)
      case 'article':
        return (<ArticleTemplate redirection={(page) => this.setState({aff: page})}></ArticleTemplate>)
      case 'admin':
        return (<PanelAdmin redirection={(page) => this.setState({aff: page})}></PanelAdmin>)
      default:
        return (<Accueil redirection={(page) => this.setState({aff: page})}></Accueil>)
    }
  }
}

class Accueil extends React.Component {
  render() {
    return (
      <div>
        <div className='bandeau'>
          <Liens nouvellePage={(page) => this.props.redirection(page)}></Liens>
          <Titre></Titre>
          <Sujets></Sujets>
        </div>
        <Contenu nouvellePage={(page) => this.props.redirection(page)}></Contenu>
      </div>
    )
  }
}

function Titre() {
  return <h1>Le MegaBlog</h1>
}


export default App;
