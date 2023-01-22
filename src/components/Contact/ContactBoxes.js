import {FiMail} from "react-icons/fi";
import styles from '@/styles/Contact.module.css';
import  Link  from 'next/link';
import { FaPhone, FaHome} from "react-icons/fa";

const ContactBoxes = () => {
  return (
    <div className={styles.contactInfo}>
        <div className={styles.card}>
            <FiMail size={70} style={{color: "rgb(248, 198, 15)"}} className={styles.cardIcon}/>
            <a className={styles.contactText} href='mailto:fedcal01@gmail.com'>fedcal01@gmail.com</a>
        </div>
        <div className={styles.card}>
            <FaPhone size={70} style={{color: "rgb(248, 198, 15)",}} className={styles.cardIcon}/>
            <Link href="/" onClick={(e)=>{window.location.href='https://wa.me/393332673965'; e.preventDefault();}} className={styles.contactText}>+ 39 3332673965</Link>
        </div>
        <div className={styles.card}>
            <FaHome size={70} style={{color: "rgb(248, 198, 15)"}}className={styles.cardIcon}/>
            <a className={styles.contactText} href='https://goo.gl/maps/YaB3cGDFm71rLcLi9'target='_blank'rel="noopener noreferrer" aria-label="Github page">Viale Italia 292, Soleto (LE)</a>
        </div>
    </div>
  )
}

export default ContactBoxes