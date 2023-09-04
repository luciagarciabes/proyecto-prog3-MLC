import React from 'react'
import "./styles.css"


export default function Footer() {
  return (
    <div className="footer">
        
    <article className="logo footer">
      <img className="logofooter" src="./logoFooter.png" alt="logo footer"/>
    </article>

    <article className="nombres_footer">

      <ul className="lista_footer">
        <li className="linombresfooter"> Clara Battaglia</li>
        <li className="linombresfooter"> Martina Scarfoni</li>
        <li className="linombresfooter"> Lucia García Bes</li>
      </ul>
    </article>


    <article className="logo-tmdb">
      <img className="img-logo-tmbd" src="./img/TMDB logo.svg" alt="logo-tmdb"/>
    </article>
    </div>
  )
}
