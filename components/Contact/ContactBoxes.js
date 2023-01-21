import React from 'react';
import {FiMail} from "react-icons/fi";
import '../../styles/ContactBoxes.module.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaHome} from "react-icons/fa";

function ContactBoxes() {
  return (
    <div className='contact-info'>
        <div className='card'>
            <FiMail size={70} style={{color: "rgb(248, 198, 15)"}} className='card-icon'/>
            <a className='contact-text' href='mailto:fedcal01@gmail.com'>fedcal01@gmail.com</a>
        </div>
        <div className='card'>
            <FaPhone size={70} style={{color: "rgb(248, 198, 15)",}} className='card-icon'/>
            <Link to={"/"} onClick={(e)=>{window.location.href='https://wa.me/393332673965'; e.preventDefault();}} className='contact-text'>+ 39 3332673965</Link>
        </div>
        <div className='card'>
            <FaHome size={70} style={{color: "rgb(248, 198, 15)"}}className='card-icon'/>
            <a className='contact-text' href='https://goo.gl/maps/YaB3cGDFm71rLcLi9'target='_blank'rel="noopener noreferrer" aria-label="Github page">Viale Italia 292, Soleto (LE)</a>
        </div>
    </div>
  )
}

export default ContactBoxes;
