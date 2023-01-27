import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

const Liens = React.lazy(() => import('./component/bandeau/liens'));
const Sujets = React.lazy(() => import('./component/bandeau/sujets'));
const Contenu = React.lazy(() => import('./component/contenu/contenu'));
const Inscription = React.lazy(() => import('./component/inscription/inscription'));
const ArticleTemplate = React.lazy(() => import('./component/article/articleTemplate'));
const PanelAdmin = React.lazy(() => import('./component/admin/panelAdmin'));
const Connexion = React.lazy(() => import("./component/connexion/connexion"));


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
            <Route path='/connexion' element={<Connexion/>}></Route>
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
          <Liens></Liens>
          <Titre></Titre>
          <Sujets></Sujets>
        </div>
        <Contenu></Contenu>
      </div>
    )
  }
}

function Titre() {
  return <h1>Le MegaBlog</h1>
}


export default App;
