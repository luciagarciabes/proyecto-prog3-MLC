import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      
    <article className="logo_header_article">
      <img className="logoheader" src="./img/logoFooter.png" alt="Logo"/>
    </article>

    <article className="padre2_header">

     //Barra de navegacion
      <nav className="nav_header">
        <ul className="lista_nav_header">
          <Link className="linavheader" to ="/">Home</Link>
          <Link className="linavheader" to ="/Favoritos">Favoritos</Link>
          <Link className="linavheader" to ="/Popular">Populares</Link>
          <Link className="linavheader" to ="/TopRated">Top Rated</Link>

        </ul>
      </nav>


    </article>
  
    </div>
  )
}
