import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

import './App.css';

const Liens = React.lazy(() => import('./component/bandeau/liens'));
const Sujets = React.lazy(() => import('./component/bandeau/sujets'));
const Contenu = React.lazy(() => import('./component/contenu/contenu'));
const Inscription = React.lazy(() => import('./component/inscription/inscription'));
const ArticleTemplate = React.lazy(() => import('./component/article/articleTemplate'));
const PanelAdmin = React.lazy(() => import('./component/admin/panelAdmin'));


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aff: 'accueil',
    };
  }

  render() {
    return (
      <Router>
        <Suspense fallback={<div>Chargement ...</div>}>
          <Routes>
            <Route index element={<Accueil/>}></Route>
            <Route path='/inscription' element={<Inscription/>}></Route>
            <Route path='/admin' element={<PanelAdmin/>}></Route>
            <Route path='/article' element={<ArticleTemplate/>}></Route>
          </Routes>
        </Suspense>
      </Router>
    )
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
