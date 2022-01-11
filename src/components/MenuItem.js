import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import '../styles/Menu.css'
  function MenuItem({image,name,price}) {
      let menuRef = useRef(null)
      useEffect(()=>{
          gsap.from(
              menuRef.current,
              {y:500,opacity:0.5,duration : 0.8 , delay:1.2}
              
          )
      })
    return (
        
        <div className='menuItem' ref={menuRef} >
            <div style={{backgroundImage : `url(${image})`}}> </div>
            <h1>{name}</h1>
            <p>{price}&euro;</p>   
        </div>
    )
}

export default MenuItem
