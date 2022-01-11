/* eslint-disable jsx-a11y/alt-text */
import React , {useState} from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
export default function Navbar( ){   
     
    
        const [isMenuClosed, setMenuClosed] = useState(true);
    
        return(
            <div className="nav-container" >
            <nav>
                <div className="nav-brand"><img src={Logo}/></div>
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}><DehazeIcon/></div>
                <div className="nav-links">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/menu">Menu</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                </div> 
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                    <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/menu">Menu</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
   