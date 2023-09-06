import React, { Component } from 'react'
import Pelicula from '../Pelicula/Pelicula'
import './styles.css'

export default class PeliculasContainer extends Component {
  constructor(props){
    super(props)
    this.state= {

    }
  }


  render() {
    return (
      <>
      <section className="seccion_peliculas  .uk-animation-toggle" tabindex="0">
      <ul className="lista_principal lista_principal_peliculas">
        {this.props.titulos.map((elm)=> <Pelicula 
         key={elm.title + elm.id}
         titulo={elm.title}
         imagen={"https://image.tmdb.org/t/p/w500" + elm.poster_path}
         descripcion= {elm.overview}
         
         />)}

      </ul>

    </section>




    </>

    )
  }
}

