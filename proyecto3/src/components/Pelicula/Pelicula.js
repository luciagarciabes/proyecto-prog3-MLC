import React, { Component } from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

export default class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state={
          clase: "Ocultar",
          ver: "Ver mas",
          esFav: false

        }
    }

    componentDidMount() {
      let storageFav= localStorage.getItem("Favoritos")
      let arrParseado= JSON.parse(storageFav)

      if (arrParseado !== null){
        let esFav= arrParseado.includes(this.props.id) // viene por props del map de peliculas container 

        if (esFav){
          this.setState({
            esFav: true
          })
        }
      } }


    validacion (){
      if(this.state.clase=== "Ocultar"){
        this.setState({
          clase: "Mostrar",
          ver: "Ver menos"
        })
      }else {
        this.setState({
          clase:"Ocultar",
          ver: "Ver mas"
        })
      }
    }


    agregarFav(idPelicula){
      let storageFav= localStorage.getItem("Favoritos")
      if(storageFav=== null) {
        let arrIds= [idPelicula]
        let arrStringuifeado = JSON.stringify(arrIds)
        localStorage.setItem("Favoritos", arrStringuifeado)
      } else {
        let arrParseado= JSON.parse(storageFav)
        arrParseado.push(idPelicula)
        let arrStringuifeado= JSON.stringify(arrParseado)
        localStorage.setItem("Favoritos", arrStringuifeado)
      }

      this.setState({
        esFav: true
      })
    }

    sacarFav(idPelicula){
      let storageFav= localStorage.getItem("Favoritos")
      let arrParseado= JSON.parse(storageFav)
      let favFiltrados= arrParseado.filter((id)=> id !== idPelicula)
      let arrStringuifeado= JSON.stringify(favFiltrados)
      localStorage.setItem("Favoritos", arrStringuifeado)

      if (this.props.actualizarState !== false){  //si viene el actualizar state por props (si esta en favoritos), ejectuta     Actualizarstate() que lo saca del estado para que lo deje de renderizar
        this.props.actualizarState(idPelicula)
        return
      }

      this.setState({
        esFav: false
      })

    }

    
  render() {
    return (  // las props vienen todas el container 
      <li className="cada_titulo">  
      
      <img className="imagenes_home" src={this.props.imagen} alt={this.props.imagen}
          height="250px"/>
      <ul className="lista_anidada">
          <li className="li_piedefoto"> {this.props.titulo}</li>
          <br/>
          <li className={`li_piedefoto ${this.state.clase}`}> {this.props.descripcion} </li>
          <button className="vermas" onClick= {()=> this.validacion()}> {this.state.ver}</button>
          <li className="vermas">  <Link className="vermas"to={`/Detalle/${this.props.id}`}> Ir a detalle</Link> </li>
          
        {
          this.state.esFav ? 
          <button  onClick={ () => this.sacarFav(this.props.id)}  className="vermas"> Sacar de Favoritos</button>  :
          <button  onClick={ () => this.agregarFav(this.props.id)}  className="vermas"> Agregar a Favoritos</button>
          
        }
          
     

      </ul>
      
  </li>
    )
  }
}
