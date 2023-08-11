import React , {useEffect, useState} from 'react'
import {MenuList} from '../helpers/ProductList'
import MenuItem from '../components/MenuItem'
import backImage from '../assets/backrouge3.jpeg'
import backImage2 from '../assets/productback.jpeg'
import Imcimage from '../assets/slider3.jpeg'
import { FaAvianex } from "react-icons/fa";
import '../styles/Products.css'
import imgtab from '../assets/tabimc.png'

function Products() {
  
  
  const [imc, setIMC] = useState (undefined)
const [liste2, setList2] = useState([])
  useEffect(async()=>{
  
    var response = await fetch('http://localhost:5000/api/v1/products')
    var data = await response.json()
   // console.log(data)
    setList2(data.products)
    
  } ,[])
  const handleChange = (evt) =>{
    const weight = document.querySelector('[name=weight').value;
    const height = document.querySelector('[name=height').value;
    console.log(weight)
    if(!weight || !height){
      return
    } else{
        setIMC((weight / Math.pow(height, 2))*10000 )   
    }
  }
  return (
    <div className='products'> 
    <div className='imcdiv' style={{backgroundImage:'url('+Imcimage+')'}}>
      <div className='imcleft'>
        <h1>Calcul de l'Indice de Masse Corporelle</h1>
        <p> L'IMC est un indicateur plus fiable que le poids pour évaluer la corpulence.</p>
        <p>    Homme ou femme, calcule en un clic ton IMC et découvre sa signification selon </p>
        <p>  la classification de l'OMS. Attention cette classification reste statistique,</p>
        <p>  elle ne s'applique pas forcément à tous, notamment les sportifs ou les seniors.</p>
        <div className='divimc'>
        <input onChange={handleChange} name="weight" placeholder=" Weight / kg" type="number" />
        <input onChange={handleChange} name="height" placeholder=" Height / cm " type="number" /> 
      <button type='' onClick={handleChange}> Calcul</button>
      <div  className='imcresult'>{imc && imc}</div>
          
        </div>
        <div className="under-title">  Products  </div>
      </div>
      <img src={imgtab} className='imcright'/>
      
    </div>
   {/*} <div className='under-title'>  Courses  /  Crossfit  /  Crossfit  </div>*/}
    <h1 className='productsTitle'>A YEAR FROM NOW,</h1>
    <h1 className='productsTitle1'>YOU WILL BE HAPPY YOU STARTED TODAY</h1>
    <div className='productsList'>  
      {MenuList.map((menuItem, Key )=>{
        return (
         
          <MenuItem 
                    Key={Key} 
                    image={menuItem.image} 
                    name={menuItem.name} 
                    price={menuItem.price}
                    />
          
        );
    }

    
    )}

{liste2.map((menuItem, Key )=>{
        return (

        <MenuItem 
                  Key={Key} 
                  image={menuItem.images[0].url} 
                  name={menuItem.name} 
                  price={menuItem.price}
                  id = {menuItem._id}
                  />
        );
    }

    
    )}
    </div>
    </div>
  );
}

export default Products