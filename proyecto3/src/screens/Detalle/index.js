import React, { Component } from 'react'
import { options } from "../../utils/constants"
import { Link } from 'react-router-dom'
import "./styles.css";
import Loader from '../../components/Loader/Loader';

export default class detalle extends Component {
    constructor(props){
        super(props)
        this.state={
            dataPelicula:null,
            esFav: false
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)  //.match.params contiene la info que viaja por la ruta parametrizada
        .then(res => res.json())
        .then(data => { this.setState({
            dataPelicula: data
        }) })
        .catch(err => console.log(err))
        console.log(this.state.dataPelicula);
    }

    agregarFav(idPelicula){
        let storageFav= localStorage.getItem("Favoritos")
        if (storageFav === null){
            let arrayIds= [idPelicula]
            let arrStringuifeado= JSON.stringify(arrayIds)
            localStorage.setItem("Favoritos", arrStringuifeado)
        }else {
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
        let favFiltrados= arrParseado.filter((id) => id !== idPelicula)
        let arrStringuifeado= JSON.stringify(favFiltrados)
        localStorage.setItem("Favoritos", arrStringuifeado)
        this.setState({
            esFav: false
        })
    }
    
  render() {
    
    return (
        <>
        {
            this.state.dataPelicula === null ?
            <div className="container">
               <Loader/>
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
                        
                            <li className="informacion generos">Generos:  {this.state.dataPelicula.genres.map(elm => elm.name + "   ")} </li>
                            <br/>
                            {
                                this.state.esFav ?
                                <button onClick={()=> this.sacarFav(this.state.dataPelicula.id)} className="vermas">Sacar de Favoritos</button>
                                :
                                 <button onClick={()=> this.agregarFav(this.state.dataPelicula.id)} className="vermas">Agregar a Favoritos</button>
                            }


                            
                            </ul>

                            

               
            </section>
        }
        </>
    )
  }
}
