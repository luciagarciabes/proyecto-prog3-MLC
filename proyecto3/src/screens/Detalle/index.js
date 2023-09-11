import React, { Component } from 'react'
import { options } from "../../utils/constants"
import { Link } from 'react-router-dom'
import "./styles.css";

export default class detalle extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPelicula:null,
            esFav: false
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
        .then(res => res.json())
        .then(data => { this.setState({
            dataPelicula: data, 
            generos: data.genres
        })})
        .catch(err => console.log(err))
    }
    
  render() {
    return (
        <>
        {
            this.state.dataPelicula === null ?
            <div className="container">
                <div> Trayendo peliculas </div>
            </div>
            :
            <section className="cuadros-d">
                <article className="videodetalles">
                    <img className="img-detalle-titulos" src={`https://image.tmdb.org/t/p/w500/`+this.state.dataPelicula.poster_path} alt={this.state.dataPelicula.title}/>
                    <h2 className="nombre-d nombre-detalle-pelicula">{this.state.dataPelicula.title}</h2>
                </article>

                    <article className="texto-d texto-detalle-movie">
                        <ul className="w-100">
                            <article className="flex">
                                <li className="estreno"><strong> {this.state.dataPelicula.release_date}</strong></li>
                                <li className="duracion"><strong>Duración: {this.state.dataPelicula.runtime} </strong></li>
                                <li className="rating"> <strong> Rating: {this.state.dataPelicula.vote_average} </strong> </li>
                            </article> 
                            </ul></article> 


                            <ul className="detalle">

                            <li className="informacion sinopsis">{this.state.dataPelicula.overview}</li>
                        
                            <li className="informacion generos"> {this.state.dataPelicula.genres.title} </li>
                            <button className="vermas">Agregar a Favoritos</button>
                            </ul>

                            

               
            </section>
        }
        </>
    )
  }
}
