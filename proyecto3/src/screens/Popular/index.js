import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import Form from "../../components/Form/Form"
import "./styles.css"

export default class Popular extends Component {
  constructor(props){
    super(props)
    this.state= {
      dataPelicula: [],
      backup: [],
      page: 1
    }}
  
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(resp => resp.json())
    .then(data => this.setState({
      dataPelicula: data.results,
      backup: data.results
    }))
    .catch(err => console.log(err))
  }

  mostrarMasPeliculas(){
    fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page + 1}`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
      dataPelicula: this.state.dataPelicula.concat(data.results),
      backup: this.state.backup.concat(data.results),
      page: this.state.page + 1
    }))
    .catch(err => console.log(err))
  }

  //ACA VA METODO FILTER
  filtrarPeliculas(nombre)  {
    let peliculasFiltradas= this.state.backup.filter((elm)=>elm.title.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      dataPelicula: peliculasFiltradas
    })
  }
  
  render() {
    return (
      <>
      <h2 className="h2_secciones .uk-animation-slide-left-small"> Populares</h2>
      <Form categoria="popular" filtrarPeliculas={(busqueda)=> this.filtrarPeliculas(busqueda)}/>
      
      <PeliculasContainer titulos={this.state.dataPelicula}/>
      <button className=" botonvermas" onClick={() => this.mostrarMasPeliculas()}>
        Mostrar más
      </button>
      <div className="separador"></div>
      </>
    )
  }
}


