import React from 'react'
import BannerImage from '../assets/detailsbodya.png'
import '../styles/Detailsrpm.css'
import {BsEmojiSmile} from "react-icons/bs";
import {AiOutlineInfo} from "react-icons/ai"
import BannerImage1 from "../assets/slider6.jpeg"

function Detailsbodya() {
  return (
    <div className=''   >
         <div class="background-title" style={{backgroundImage:'url('+BannerImage1+')'}} >
      <h1 className='details-title'>RPM™</h1>
      <div className='under-title'>  Courses  /  RPM™  /  About RPM™  </div>
    </div>

  <div className='section-title'>
<h1>DÉVELOPPEZ VOTRE FORME PHYSIQUE AVEC LE BODYATTACK™</h1>
<br></br>
<div className='section-title-border' >

</div>
  </div>
  <div className='section-description' >
<p >Le BODYATTACK™ améliore vos capacités physiques, celles dont vous avez besoin dans votre vie de tous les jours</p>
  </div>
  <div className='section-img' >
<img  src={BannerImage} />
  </div>
  <div className='section-centent' >
<p >
Le BODYATTACK™ est un cours de fitness énergisant avec des mouvements qui s’adressent aussi bien aux débutants qu’aux passionnés. Nous combinons des mouvements athlétiques comme la course, des flexions et des sauts avec des exercices de force comme des pompes et des squats.
Sous forme d’interval training (entraînement fractionné), vous combinez des mouvements aérobiques et des exercices de renforcement et de stabilisation. Au programme, des mouvements simples (pliométrie, aérobic et course à pieds), pour un travail complet sur le haut et le bas du corps. À la fin de chaque séance, des étirements permettront une bonne récupération des muscles.</p>
<p >
Un cours collectif ouvert à toute personne souhaitant se dépenser sans compter. Porté par l’effet de groupe et des musiques plus motivantes les unes que les autres, vous suivrez les mouvements chorégraphiés de votre coach et solliciterez de nombreux groupes musculaires tels que les épaules, les bras, la taille, les abdominaux, les fessiers, les cuisses…</p>
  </div>

  <div className='section-info' >
    <div className='section-info-1' >
    <div className='section-title'>
<h3> <BsEmojiSmile></BsEmojiSmile>  Les bienfaits du BODYATTACK™</h3>
<br></br>
<div className='section-title-border' >

</div>
  </div>



  <ul className='section-info-centent'>
    <li>Brûle les calories</li>
    <li>Préparation physique</li>
    <li>Gain en vitesse, en puissance et en détente</li>
    <li>Meilleure proprioception (perception de la position des différentes parties du corps)</li>
    <li>Muscler et tonifier le bas et le haut du corps</li>
    <li>Améliore la capacité cardio-vasculaire et donc le souffle</li>
    <li>Meilleures coordination et agilité</li>
    <li>Travail des abdominaux et de la posture</li>
    <li>Densité osseuse plus importante, lutte contre l’ostéoporose</li>
    <li>Amélioration de la condition physique</li>
  </ul>
    </div>
    <div className='section-info-2' >
    <div className='section-title'>
<h3> <AiOutlineInfo></AiOutlineInfo>  C'est votre 1ére fois ?</h3>
<br></br>
<div className='section-title-border' >

</div>

<p className='section-info-centent' >
Vous pouvez adapter un entraînement de BODYATTACK™ à votre niveau de forme actuel. Nos instructeurs peuvent vous montrer des options à faible impact pour personnaliser chaque entraînement à votre niveau de forme


La recherche montre que le secret d’une bonne remise en forme est de faire une progression lente, nous vous recommandons donc de commencer avec 1 à 2 cours par semaine et repoussez les limites à partir de là.
</p>
  </div>
    </div>
  
  </div>
    </div>
  )
}

export default Detailsbodya