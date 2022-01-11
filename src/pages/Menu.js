import React,{useRef, useEffect} from 'react'
import '../styles/Menu.css'
import {MenuList} from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import {gsap} from 'gsap'
function Menu() {
    const titleRef = useRef(null)
    useEffect(()=>{
        gsap.from(
            titleRef.current,
            {opacity:0,duration:2, delay:1.8}
        )
    },[])
    return (
        <div className='menu'>
            <h1 className='menuTitle' ref={titleRef}>Menu</h1>
            <div className='menuList'>
                {MenuList.map((menuItem,i)=>{
                   return (
                    <MenuItem 
                    key={i}
                    image={menuItem.image} 
                    name={menuItem.name} 
                    price={menuItem.price} 
                    />
                   )
                })}
            </div>  
        </div>
    )
}

export default Menu
