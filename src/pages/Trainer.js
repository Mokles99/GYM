import React,{useState,useEffect} from 'react'
import backImage from '../assets/interior.jpg'
import { CoachsDiffList } from '../helpers/CoachsList'
import CoachsItem from '../components/CoachItem'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Coach.css'
import MenuItem from '../components/MenuItem'
 {/* return (
      <div className='hometr'>  
      <h1 > Nos Coachs </h1>
      <p> Coachs professionnels diplômés d’État, d'une grande expérience et certifiés </p>
      <section className="trainers" >
       <div className='flex-box' >
         <div className='section-1'  >
        <p className='description' >Mokhles</p>
        <button className='btn-trainers' >
          Pick
        </button>
         </div>
         <div className='section-2' >
           <p className='description' >Mokhles</p>
           <button className='btn-trainers' >
             Pick
           </button>
         </div>
         <div className='section-3' >
           <p className='description' >Feriel mini gat</p>
           <button className='btn-trainers' >
             Pick
           </button>
         </div>

       </div>
      </section>
      </div>
 ) */}
 
 function Trainer() {
  const [liste2, setListe2] = useState([])
  useEffect(async()=>{
  
    var response = await fetch('http://localhost:5000/api/v2/coachs')
    var data = await response.json()
   // console.log(data)
    setListe2(data.coachs)
    console.log(liste2)
    
  } ,[])
  return (
    <div className='Coachs' >
        <h1 className='coachsTitle' > Nos Coachs</h1>  
        <hr/>
        <h1 className='coachsTitle1' > Coachs professionnels diplômés d’État, d'une grande expérience et certifiés </h1>
        <div className='coachsList'>
      {CoachsDiffList.map((coachsItem, Key )=>{
        return (
        <CoachsItem 
                  Key={Key} 
                  image={coachsItem.coimage} 
                  name={coachsItem.coname} 
                  id={coachsItem.codesc}
                  lien= {coachsItem.lien}
                  
                  />
        );
    }
    )}
    {liste2.map((coachsItem, Key )=>{
        return (
        <CoachsItem 
                  Key={Key} 
                  image={coachsItem.images[0].url} 
                  name={coachsItem.name} 
                  //price={coachsItem.price}
                  //id = {coachsItem._id}
                  />
        );
    }

    
    )}
    </div>
    </div>
  )
}

export default Trainer
