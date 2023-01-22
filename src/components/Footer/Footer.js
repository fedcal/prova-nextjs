import Link from "next/link";
import {FaHome, FaLinkedin, FaPhone} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {FaGithub} from "react-icons/fa";
import styles from '@/styles/Footer.module.css';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.left}>
                    <div className={styles.location}>
                        <FaHome size={20} style={{color: "rgb(248, 198, 15)", marginRight:'2rem'}}/>
                        <div>
                            <p>Viale Italia 292</p>
                            <p>Soleto (LE)</p>
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <h4>
                            <FaPhone size={18} style={{color: "rgb(248, 198, 15)", marginRight:'2rem'}}/>
                            <Link href={"/"} onClick={(e)=>{window.location.href='https://wa.me/393332673965'; e.preventDefault();}}>39 3332673965</Link>
                        </h4>
                    </div>
                    <div className={styles.email}>
                        <h4>
                            <FiMail size={18} style={{color: "rgb(248, 198, 15)", marginRight:'2rem'}}/>
                            <Link href={"/"} onClick={(e)=>{window.location.href='mailto:fedcal01@gmail.com'; e.preventDefault();}}>fedcal01@gmail.com</Link>
                        </h4>
                    </div>
                </div>
                <div className={styles.right}>
                    <h4>Federico Calò</h4>
                    <p>Sviluppatore software per soluzioni personalizzate di siti web e applicazioni desktop.</p>
                    <div className={styles.social}>
                        <a href='https://www.linkedin.com/in/federico-calo/'target='_blank'rel="noopener noreferrer" aria-label="Linkedin page"> <FaLinkedin size={20} style={{color: "rgb(248, 198, 15)", marginRight:'1rem'}}/></a>
                        <a href='https://github.com/fedcal'target='_blank'rel="noopener noreferrer" aria-label="Github page"> <FaGithub size={20} style={{color: "rgb(248, 198, 15)", marginRight:'1rem'}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;