import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import FormHome from "../../components/FormHome/FormHome"
import { Link } from 'react-router-dom'
import "./styles.css"

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state= {
            populares: [],
            topRated: [],
            dataBusqueda: []
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

    //fetch de filtrar peliculas
    filtrarPeliculas(input){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
        .then(resp => resp.json())
        .then(data => this.setState({
          dataBusqueda: data.results
        }))
        .catch(err => console.log(err))
    }
    


    render() {

    return (
      <>
      <FormHome  filtrarPeliculas={(input) => this.filtrarPeliculas(input)}/>
      
        {
            this.state.dataBusqueda.length === 0 ? 
                <>
             <Link className="linkhome" to="/Popular"> Ver todas las populares </Link>
             <PeliculasContainer  titulos={this.state.populares} nombreSeccion="Populares"/>
             <br/>  <br/>  <br/>
             <Link className="linkhome"  to="/TopRated"> Ver todas las Top Rated </Link>
             <PeliculasContainer titulos={this.state.topRated} nombreSeccion="Top Rated"/> </>
              :
             <PeliculasContainer titulos={this.state.dataBusqueda} nombreSeccion="Resultado de búsqueda"/>
   
        }

   
      </>
    )
  }
}
