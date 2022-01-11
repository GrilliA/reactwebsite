import React , {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {gsap} from 'gsap'
import Pasta from '../assets/bg-pasta.jpg'
import '../styles/Home.css'



function HomePage() {
   const textEffect = useRef(null)
   useEffect(()=>{
      gsap.from(
        textEffect.current,
        {opacity: 0 , x:-100 , duration: 3},
      )
   },[])
    return (
        <div className='home' style={{backgroundImage : `url(${Pasta})`}}>
            <div 
            className='headerContainer'
            ref={textEffect}
             >
                <h1>Nonna Pasta</h1>
                <p>La pasta per tutti</p>
                <Link to="/menu">
                   <button>ORDINA ORA</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
