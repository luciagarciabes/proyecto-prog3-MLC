import React from 'react'
import "./styles.css"

export default function Header() {
  return (
    <div className="header">
      
    <article className="logo_header_article">
      <img className="logoheader" src="../pintegrador-pro1-grupo/img/LOGODEEEEF.png" alt="Logo"/>
    </article>

    <article className="padre2_header">
      <form className="form_header" action="./search-results.html" method="GET">
        <input className="inputform" type="text" name="busqueda" value="" placeholder=" Escriba un título..."/>
        <button className="botonform">Buscar</button>
      </form>


     //Barra de navegacion
      <nav className="nav_header">
        <ul className="lista_nav_header">
          <li> <a className="linavheader" href="./index.html"> Home </a> </li>
          <li> <a className="linavheader" href="./favorite.html"> Mis Favoritos</a> </li>
          <li> <a className="linavheader" href="./ genres.html"> Géneros</a> </li>

        </ul>
      </nav>


    </article>
  
    </div>
  )
}
