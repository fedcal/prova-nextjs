import styles from "@/styles/HeroImg.module.css";
import IntroImg from "@/assets/hero.webp";
import {Link} from "next/link";

const HeroImg = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.mask}>
            <img className={styles.intoImg} src={IntroImg} alt="Sfondo di un pc per la sezione"/>
        </div>
        <div className={styles.content}>
            <h1>Federico Calò</h1>
            <p>Sviluppatore e Analista Software</p>
            <div>
                <Link href="/progetti" className={styles.btn}>Progetti</Link>
                <Link href='/contatti' className={[styles.btn,styles.btnLight]}>Contattami</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;