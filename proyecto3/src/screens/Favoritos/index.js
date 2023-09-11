import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import "./styles.css"


export default class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state={
            favoritos: []
        }
    }

    componentDidMount(){
        let storageFav= localStorage.getItem("Favoritos");
        if(storageFav !== null){
            let favsParseados= JSON.parse(storageFav)
            Promise.all(
                favsParseados.map(id => 
                    fetch("https://api.themoviedb.org/3/movie/" + id, options)
                    .then(res => res.json()))
                     )
                     .then(data =>  this.setState({
                        favoritos: data
                     }))
                     .catch(err => console.log(err))

        }
    }

    actulizarState(id){
        let stateActualizado= this.state.favoritos.filter((elm)=> elm.id !== id )
        this.setState({
            favoritos: stateActualizado
        })
    }


  render() {
    return (
        <>
        {
            this.state.favoritos.length === 0 ?
            <section className="seccionFavoritos">
            <h1 className="h2_secciones"> Todavía no tiene peliculas en favoritos</h1>
            </section>
            :
            <PeliculasContainer actulizarState={(id)=> this.actulizarState(id)} nombreSeccion= "Favoritos" titulos={this.state.favoritos}/>

        }
        </>
    )
  }
}


