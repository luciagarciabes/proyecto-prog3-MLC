import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state= {
            populares: [],
            topRated: []
        }
    }
    
      
    componentDidMount(){
        //fetch de peliculas
        fetch("https://api.themoviedb.org/3/discover/movie", options)
        .then(response => response.json())
        .then(data => {
            this.setState({populares: data.results.slice(0, 5)})
        }
            )
        .catch(error => console.log(error))

        //fetch de top rated
        fetch("https://api.themoviedb.org/3/movie/top_rated", options)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            this.setState({topRated: data.results.slice(0,5)})
        })
        .catch(error => console.log(error))

    }
    


    render() {

    return (
      <>
      //Populares
      <h2 className="h2_secciones .uk-animation-slide-left-small"> Populares</h2>
      <PeliculasContainer titulos={this.state.populares}/>

      <div className="separador"></div>

    //top rated
    <h2 className="h2_secciones .uk-animation-slide-left-small"> Top Rated</h2>
    <PeliculasContainer titulos={this.state.topRated}/>
   
      </>
    )
  }
}
