import React, { Component } from 'react'
import "./styles.css"

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state= {
            input: ""
        }
    }

    evitarSumbit(evento){
        evento.preventDefault()
    }

    guardarValor(evento){
        this.setState({
            input: evento.target.value
        },
        () => this.props.filtrarPeliculas(this.state.input) // duda con esto, de dónde sale?
        )
    }

    render() {
    return (
        <form onSubmit={(evento) => this.evitarSumbit(evento)} className="form_header" action="./search-results.html" method="GET">
        <input onChange={(evento) => this.guardarValor(evento)} className="inputform" type="text" name="busqueda" value={this.state.input} placeholder=" Escriba un título..."/>
        {
            this.props.categoria === "popular" ? 
            <button className="botonform">Buscar Populares</button> :
            <button className="botonform">Buscar Top Rated</button>
        }
        </form>
    )
  }
}
