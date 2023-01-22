import Link from "next/link";
import styles from '@/styles/Navbar.module.css';
import {useState} from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [click, setClick]=useState(false);
    const handleClick =()=>setClick(!click);
    const [color, setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false);
        }
    }

    if (typeof window === "undefined") {
         /* we're on the server */ 
    }else{
        window.addEventListener("scroll",changeColor);
    }
    

    return (
        <div className={color ? [styles.header, styles.headerBg] : styles.header}>
     
            <Link href={"/"}><h1>Federico Calò</h1></Link>
            <ul className={click ? [styles.navMenu, styles.active] : styles.navMenu}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/presentazioni">Chi sono</Link>
                </li>
                <li>
                    <Link href="/progetti">Progetti</Link>
                </li>
                <li>
                    <Link href="/servizi">Servizi</Link>
                </li>            
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contatti">Contatti</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
            </div>
        </div>
    )
}

export default Navbar;