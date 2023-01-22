import {AiOutlineCalendar} from "react-icons/ai";
import styles from '@/styles/Esperienze.module.css';

const Esperienze = () => {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
        <div className={styles.experience}>
                <h1>Esperienze Lavorative</h1>
                <div className={styles.row}>
                    <div className={styles.timelineBox}>
                        <div className={styles.timeline}>

                            <div className={styles.timelineItem}>
                                <div className={styles.circleDot}></div>
                                <h4 className={styles.timelineDate}><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>27/12/2022 - Attualmente ricopro questo ruolo</h4>
                                <h2 className={styles.timelineTitle}>Links Management and Technology SPA</h2>
                                <p className={styles.timelineText}>Apprendistato nel ruolo di Beckend developer:
                                <ul>
                                    <li>Sviluppo beckend di applicazioni attraverso il framework SpringBoot</li>
                                </ul>
                                </p>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.circleDot}></div>
                                <h4 className={styles.timelineDate}><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>14/02/2022 - 23/12/2022</h4>
                                <h2 className={styles.timelineTitle}>Links Management and Technology SPA</h2>
                                <p className={styles.timelineText}>Stage nel ruolo di analista software:
                                <ul>
                                    <li>Analisi software AS-IS e TO-BE nell&apos;ambito di un progetto relativo alla pubblica amministrazione</li>
                                    <li>Formazione riguardante Java, la programmazione OO, Design Patterns, Git, Docker e Flussi ETL</li>
                                </ul>
                                </p>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.circleDot}></div>
                                <h4 className={styles.timelineDate}><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>02/02/2021 - 29/10/2021</h4>
                                <h2 className={styles.timelineTitle}>WebScience</h2>
                                <p className={styles.timelineText}>
                                Assunzione in qualità Software Developer Junior presso l&apos;azienda WebScience. Attività svolte:
                                <ul>
                                    <li>Analisi software AS-IS e TO-BE</li>
                                    <li>Evolutive SEO WebSite</li>
                                    <li>Evolutive WebSite</li>
                                    <li>Utilizzo CMS Liferay</li>
                                </ul>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.education}>
                <h1>Formazione</h1>
                <div className={styles.row}>
                    <div className={styles.timelineBox}>
                        <div className={styles.timeline}>

                            <div className={styles.timelineItem}>
                                <div className={styles.circleDot}></div>
                                <h4 className={styles.timelineDate}><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>2017</h4>
                                <h2 className={styles.timelineTitle}> Inizio studi universitari in Informatic</h2>
                                <p className={styles.timelineText}>Immatricolazione presso l&apos;università Aldo Moro di Bari, facoltà di Informatica. Classe di laurea L31</p>
                            </div>

                            <div className={styles.timelineItem}>
                                <div className={styles.circleDot}></div>
                                <h4 className={styles.timelineDate}><AiOutlineCalendar size={18} style={{color: "#fff", marginRight:'0.5rem'}}/>2012-2017</h4>
                                <h2 className={styles.timelineTitle}>Diploma di scuola superiore I.T.C Cezzi De Castro Moro</h2>
                                <p className={styles.timelineText}>Diploma di maturità conseguito presso l&apos;Istituto Tecnico Commerciale Cezzi De Castro Moro, con indirizzo Sistemi Informativi Aziendali.</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Esperienze