import { Component } from "react";

class FormHome extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: '',
            dataPelicula:[],
            backup:[]
        }
    }


    evitarSubmit(evento){
        evento.preventDefault()
    }
    

    guardarValor(evento){
        this.setState(
            {
                input: evento.target.value
            },
            () => this.props.filtrarPeliculas(this.state.input)
        )
    }

    

    render(){
        return(
            <>
            <form onSubmit={(evento) => this.evitarSumbit(evento)} className="form_header" action="./search-results.html" method="GET">
            <input onChange={(evento) => this.guardarValor(evento)} className="inputform" type="text" name="busqueda" value={this.state.input} placeholder=" Escriba un título..."/>
            <button className="botonform">Buscar </button> 
            </form>
            </>
        )
    }
}

export default FormHome