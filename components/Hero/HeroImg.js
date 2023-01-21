import React from 'react';
import IntroImg from "../assets/hero.webp";
import {Link} from "react-router-dom";
import Image from 'next/image';
import '../../styles/HeroImgStyle.module.css';

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <Image className="into-img" src={IntroImg} alt="Sfondo di un pc per la sezione"/>
        </div>
        <div className="content">
            <h1>Federico Calò</h1>
            <p>Sviluppatore e Analista Software</p>
            <div>
                <Link to="/progetti" className="btn">Progetti</Link>
                <Link to='/contatti' className="btn btn-light">Contattami</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;