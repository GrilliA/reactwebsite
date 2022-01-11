import React,{useRef,useEffect} from 'react'
import gsap from 'gsap'
import '../styles/About.css'
import ImmagineAbout from '../assets/pasta-about.jpg'

function About() {
    const aboutRef = useRef(null)
    useEffect(()=>{
      gsap.from(
        aboutRef.current,
        {opacity:0 , duration:0.8},

      )
    },[])
    return (
        <div className='about' ref={aboutRef}>
         <div className='aboutTop'
          style={{backgroundImage : `url(${ImmagineAbout})`}}
         >
         </div>
         <div className='aboutBottom'>
             <h1>ABOUT US</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
         </div>
        </div>
    )
}

export default About
