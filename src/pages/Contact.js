import React,{useEffect, useRef}from 'react'
import gsap from 'gsap'
import '../styles/Contact.css'
import ContactImmagine from '../assets/pasta-contact.jpg'

function Contact() {
    const contactRef = useRef(null)
    useEffect(()=>{
      gsap.from(
        contactRef.current,
        {opacity:0 , duration:0.8},

      )
    },[])
    return (
        <div className='contact' ref={contactRef}>
            <div className='leftSide' style={{backgroundImage : `url(${ContactImmagine})`}} >

            </div>
            <div className='rightSide'>
                <h1>Contatti</h1>

                <form id='contact-form' method='POST'>
                    <label htmlFor='name'> Nome Completo</label>
                    <input name="name" placeholder='Inserisci nome completo' type="text"/>
                    <label htmlFor='email'> email</label>
                    <input name="email" placeholder='Inserisci email valida' type="email"/>
                    <label htmlFor='message'> Messaggio</label>
                    <textarea rows='6'
                      placeholder='Inserisci un messaggio'
                      name='message' 
                      required>
                    </textarea>
                    <button type='submit'>Invia messaggio</button> 
                </form>
            </div>
            
        </div>
    )
}

export default Contact
