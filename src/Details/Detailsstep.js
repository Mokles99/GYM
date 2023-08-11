import React from 'react'
import BannerImage from '../assets/detailsstep.png'
import '../styles/Detailsrpm.css'
import {BsEmojiSmile} from "react-icons/bs";
import {AiOutlineInfo} from "react-icons/ai"
import BannerImage1 from "../assets/slider6.jpeg"

function Detailsstep() {
  return (
    <div className=''   >
  <div class="background-title" style={{backgroundImage:'url('+BannerImage1+')'}} >
      <h1 className='details-title'>Step & Circuit</h1>
      <div className='under-title'>  Courses  /  Step & Circuit  /  About Step & Circuit  </div>
    </div>

  <div className='section-title'>
<h1>DES BIENFAITS PHYSIQUES ET ARTISTIQUES</h1>
<br></br>
<div className='section-title-border' >

</div>
  </div>
  <div className='section-description' >
<p >Le step est devenue l’une des activités cardio-training les plus populaires.</p>
  </div>
  <div className='section-img' >
<img  src={BannerImage} />
  </div>
  <div className='section-centent' >
<p >
Les cours collectifs de Step sont des cours cardio-vasculaires, chorégraphiés. Vous marchez autour d’un step (marche d’escalier) en musique, ce qui permet de développer votre endurance, votre souffle et votre coordination
</p>
<p >
Les pas de danse sollicitent les membres inférieurs (jambes, fessiers, cuisses). Vos muscles en sortiront tonifiés et sculptés. Une séance débute toujours par un échauffement du corps à l’aide de mouvements aérobic simples
</p>
  </div>

  <div className='section-info' >
    <div className='section-info-1' >
    <div className='section-title'>
<h3> <BsEmojiSmile></BsEmojiSmile>  Les bienfaits du STEP</h3>
<br></br>
<div className='section-title-border' >

</div>
  </div>



  <ul className='section-info-centent'>
    <li>Brûle les calories</li>
    <li>Améliore la capacité cardio-vasculaire et donc le souffle</li>
    <li>Améliore la condition physique générale</li>
    <li>Densité osseuse plus importante, lutte contre l’ostéoporose</li>
    <li>Sensation de bien-être</li>
    <li>Gagne en force</li>
  </ul>
    </div>
    <div className='section-info-2' >
    <div className='section-title'>
<h3> <AiOutlineInfo></AiOutlineInfo> C'est votre 1ére fois ?</h3>
<br></br>
<div className='section-title-border' >

</div>

<p className='section-info-centent' >
Commencez avec un step bas et suivez les consignes et options de l’instructeur
La clé est de participer à environ cinq cours pour s’approprier les mouvements naturellement, comme pour le vélo, il faut un peu de temps avant de s’amuser !
</p>
  </div>
    </div>
  
  </div>
    </div>
  )
}

export default Detailsstep