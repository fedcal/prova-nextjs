import styles from '@/styles/WorkCard.module.css';
import abitareMicocci from '@/assets/abitaremicocci.webp';
import portfolio from '@/assets/portfolio.webp';
import regressionTree from '@/assets/tree3.webp';
import {Link} from 'next/link';
import Image from 'next/image';

const WorkCardPreview = ()=> {
  return (
    <div className={styles.workContainer}>
        <h1 className={styles.projectHeading}>Alcuni Progetti</h1>
        <div className={styles.projectContainer}>
            
            <div className={styles.projectCard}>
                <Image src={portfolio} alt="preview del sito personale"/>
                <h2 className={styles.projectTitle}>Portfolio Personale</h2>
                <div className={styles.proDetails}>
                    <p>Nato come progetto sviluppato nel tempo libero, questo mio sito web è stato realizzato interamente con la 
                        libreria ReactJs e svariate librerie Javascript. La principale è la libreria Helmet.js, la quale supporta 
                        lo sviluppo web per la gestione dinamica delle keyword delle varie pagine, migliorando significativamente la 
                        SEO del sito.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/portfolio-personale-reactjs' className={styles.btn}>GitHub</a>
                    <a href='https://federicocalo.dev/' className={styles.btn}>Sito</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image src={abitareMicocci} alt="Preview del sito di Abitare Micocci"/>
                <h2 className={styles.projectTitle}>Abitare Micocci</h2>
                <div className={styles.proDetails}>
                    <p>Sito web realizzato per un negozio di arredamento attraverso i linguaggi HTML, CSS e Javascript. Attraverso l'utilizzo
                        di quest'ultimo linguaggio lo scorrimento verticale del sito è stato reso più gradevole e sono state create delle piccole 
                        gallerie per le immagini. Inoltre è stato condotto uno studio SEO sui testi presenti all'interno del sito, per migliorarne 
                        il posizionamento all'interno del ranking di ricerca Google.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/AbitareMicocci/abitare.github.io' className={styles.btn}>GitHub</a>
                    <a href='https://abitaremicocci.com/' className={styles.btn}>Sito</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image src={regressionTree} alt="Immagine di un regression Tree Mining"/>
                <h2 className={styles.projectTitle}>Regression Tree Mining</h2>
                <div className={styles.proDetails}>
                    <p>Progetto universitario sviluppato in Java. Consiste nel creare un albero di regressione da dei dati che vengono
                        letti da un database o da un file testuale. L'albero viene successivamente percorso attraverso delle regole selezionate
                        dall'utente e infine verrà predetto un dato.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/RegressionTreeJava' className={styles.btn}>GitHub</a>
                </div>
            </div>
        </div>
        <div className='projectHeading'>
            <Link href='/progetti'className={styles.btn}>Tutti i progetti</Link>
        
        </div>
        
        
    </div>
  )
}

export default WorkCardPreview;