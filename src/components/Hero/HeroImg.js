import styles from "@/styles/HeroImg.module.css";
import IntroImg from "../../../public/hero.webp";
import Link from "next/link";
import Image from "next/image";

const HeroImg = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.mask}>
            <Image className={styles.intoImg} src={IntroImg} alt="Sfondo di un pc per la sezione"  />
        </div>
        <div className={styles.content}>
            <h1>Federico Calò</h1>
            <p>Sviluppatore e Analista Software</p>
            <div>
                <Link href="/progetti" className={styles.pulsante}>Progetti</Link>
                <Link href='/contatti' className={[styles.pulsante, styles.btnLight].join(" ")}>Contattami</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;