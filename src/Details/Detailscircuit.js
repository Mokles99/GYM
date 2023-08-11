import React from 'react'
import BannerImage from '../assets/detailscircuit.png'
import '../styles/Detailsrpm.css'
import {BsEmojiSmile} from "react-icons/bs";
import {AiOutlineInfo} from "react-icons/ai"
import BannerImage1 from "../assets/slider6.jpeg"

function Detailscircuit() {
  return (
    <div className=''   >
  <div class="background-title" style={{backgroundImage:'url('+BannerImage1+')'}} >
      <h1 className='details-title'> Crossfit </h1>
      <div className='under-title'>  Courses  /  Crossfit  /  Crossfit  </div>
    </div>

  <div className='section-title'>
<h1>UN PARCOURS SPORTIF POUR UN CORPS TONIQUE !</h1>
<br></br>
<div className='section-title-border' >

</div>
  </div>
  <div className='section-description' >
<p >Pour une technique d’entraînement simple, rapide et efficace, essayez le circuit training</p>
  </div>
  <div className='section-img' >
<img  src={BannerImage} />
  </div>
  <div className='section-centent' >
<p >
Le circuit training consiste en une suite de plusieurs exercices, choisis au préalable, qui sont enchaînés pendant un temps déterminé ou bien un nombre de répétitions et de séries déterminées. Le temps de repos sera limité au minimum pour optimiser au maximum l’intensité de la séance.  Une fois l’enchaînement terminé, le circuit est répété.
</p>

  </div>

  <div className='section-info' >
    <div className='section-info-1' >
    <div className='section-title'>
<h3> <BsEmojiSmile></BsEmojiSmile>  Les avantages du circuit training</h3>
<br></br>
<div className='section-title-border' >

</div>
  </div>



  <ul className='section-info-centent'>
    <li>Gain de temps</li>
    <li>Muscler l’ensemble du corps</li>
    <li>Entraînement complet</li>
    <li>Améliorer la condition physique générale</li>
    <li>Perte de poids rapide</li>
    <li>Ambiance collective motivante</li>
  </ul>
    </div>
    <div className='section-info-2' >
    <div className='section-title'>
<h3> <AiOutlineInfo></AiOutlineInfo> C'est votre 1ére fois ?</h3>
<br></br>
<div className='section-title-border' >

</div>

<p className='section-info-centent' >
Idéal pour muscler l’ensemble de son corps et améliorer sa condition physique générale, cette méthode convient aussi bien aux débutants qu’aux sportifs confirmés.
</p>
  </div>
    </div>
  
  </div>
    </div>
  )
}

export default Detailscircuit