import React, { Component } from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

export default class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state={
          clase: "Ocultar",
          ver: "Ver mas"

        }
    }

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

    
  render() {
    return (
      <li className="cada_titulo">
      
      <img className="imagenes_home" src={this.props.imagen} alt={this.props.imagen}
          height="250px"/>
      <ul className="lista_anidada">
          <li className="li_piedefoto"> {this.props.titulo}</li>
          <br/>
          <li className={`li_piedefoto ${this.state.clase}`}> {this.props.descripcion} </li>
          <button className="vermas" onClick= {()=> this.validacion()}> {this.state.ver}</button>
          <li className="vermas">  <Link className="vermas"to={`/Detalle/${this.props.id}`}> Ir a detalle</Link> </li>
          
          <button className="vermas">Agregar a Favoritos</button>
     

      </ul>
      
  </li>
    )
  }
}
