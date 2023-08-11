import React from 'react'
import BannerImage from '../assets/detailsbodyp.png'
import '../styles/Detailsrpm.css'
import {BsEmojiSmile} from "react-icons/bs";
import {AiOutlineInfo} from "react-icons/ai"
import BannerImage1 from "../assets/slider6.jpeg"

function Detailsbodyp() {
  return (
    <div className=''   >
 
 <div class="background-title" style={{backgroundImage:'url('+BannerImage1+')'}} >
      <h1 className='details-title'>BODYATTACK™</h1>
      <div className='under-title'>  Courses  /  BODYATTACK™  /  About BODYATTACK™  </div>
    </div>
  <div className='section-title'>
<h1>LE COURS D'HALTÈRES LE PLUS CONNU AU MONDE</h1>
<br></br>
<div className='section-title-border' >

</div>
  </div>
  <div className='section-description' >
<p>Affinez vous et renforcez vous avec 800 à 1 000 reps à chaque cours</p>
  </div>
  <div className='section-img' >
<img  src={BannerImage} />
  </div>
  <div className='section-centent' >
<p >
Premier programme a avoir vu le jour sous le nom de “Pump” en 1990 et sans doute l’un des plus populaires parmi les adhérents, BODYPUMP™ est conçu pour toutes les personnes qui souhaitent s’affiner, se tonifier et se remettre en forme rapidement.

En mettant l’accent sur l’utilisation de poids légers et sur la répétition des mouvements, vous allez brûler des calories, tonifier votre corps et augmenter votre masse musculaire
</p>
<p >
Souvent connu sous le nom de « Pump » par les habitués, le BODYPUMP™ est la méthode de renforcement musculaire la plus rapide, car tous vos muscles sont sollicités à chaque mouvement. Avec de nouvelles musiques et une nouvelle chorégraphie tous les trimestres ainsi que des instructeurs hautement qualifiés, tirez tous les bénéfices de « l’effet de groupe » pour obtenir les résultats que vous souhaitez !
</p>
<p>
A la fin du cours, vous aurez le sentiment d’avoir été mis au défi et motivé, prêt à revenir pour une dose supplémentaire.
</p>
  </div>

  <div className='section-info' >
    <div className='section-info-1' >
    <div className='section-title'>
<h3> <BsEmojiSmile></BsEmojiSmile>  Les bienfaits du BODYPUMP™</h3>
<br></br>
<div className='section-title-border' >

</div>
  </div>



  <ul className='section-info-centent'>
    <li>Sculpte, renforce et tonifie les muscles et le corps</li>
    <li>Améliore la force et la condition physique</li>
    <li>Améliore la densité osseuse</li>
    <li>Permet de réaliser 75 à 100 répétitions sur chaque partie du corps, soit environ 800 répétitions par cours</li>
    <li>Apporte un sentiment d’accomplissement personnel</li>
  </ul>
    </div>
    <div className='section-info-2' >
    <div className='section-title'>
<h3> <AiOutlineInfo></AiOutlineInfo> C'est votre 1ére fois ?</h3>
<br></br>
<div className='section-title-border' >

</div>

<p className='section-info-centent' >
Ce programme est basé sur l’EFFET DE RÉPÉTITION – (THE REP EFFECT).
</p>
<p className='section-info-centent' >
Une formule qui a fait ses preuves dont le but est de faire travailler les muscles en faisant un grand nombre de répétitions avec des poids légers – c’est le secret des muscles fins et athlétiques
</p>

  </div>
    </div>
  
  </div>
    </div>
  )
}

export default Detailsbodyp