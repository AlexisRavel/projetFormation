import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './contenu.css'

class Contenu extends React.Component {
    constructor(props) {
      super();
      this.state = {
        isLoading: true,
        articles: null,
      }  
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/articles')
            .then(res => {
                const articles = res.data["hydra:member"];
                this.setState({
                    articles: articles,
                    isLoading: false
                });
            })
    }

    render() {
        if(this.state.isLoading==false) {
            return (
                <div className="contenu">
                    {this.state.articles.map(article => (
                        <div>
                            <Link to="/article" className="link"><h2>{article.titre}</h2></Link>
                            <p>{article.contenu}</p>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div className="contenu">
                    <p>loading...</p>
                </div>
            )
        }
    }
}




export default Contenu