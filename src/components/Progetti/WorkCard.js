import styles from '@/styles/WorkCard.module.css';
import abitareMicocci from '../../../public/abitaremicocci.webp';
import portfolioTemplate1 from '../../../public/PortfolioTamplate1.webp';
import worldsInn from '../../../public/worldsinn.webp';
import gestionaleDipendenti from '../../../public/gestionaleDipendenti.webp';
import casaMagnolie from '../../../public/casaMagnolie.webp';
import portfolio from '../../../public/portfolio.webp';
import regressionTree from '../../../public/tree3.webp';
import tcp from '../../../public/tcp.webp';
import udp from '../../../public/udp.webp';
import pizzeria from '../../../public/Pizzeria.webp';
import Image from 'next/image'

function WorkCard() {
  return (
    <div className={styles.workContainer}>
        <h1 className={styles.projectHeading}>Progetti</h1>
        <div className={styles.projectContainer}>
            
            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={portfolio} alt="preview del sito personale" />
                <h2 className={styles.projectTitle}>Portfolio Personale</h2>
                <div className={styles.proDetails}>
                    <p>Nato come progetto sviluppato nel tempo libero, questo mio sito web è stato realizzato interamente con la 
                        libreria ReactJs e svariate librerie Javascript. La principale è la libreria Helmet.js, la quale supporta 
                        lo sviluppo web per la gestione dinamica delle keyword delle varie pagine, migliorando significativamente la 
                        SEO del sito.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/portfolio-personale-reactjs' className='btn'>GitHub</a>
                    <a href='https://federicocalo.dev/' className='btn'>Sito</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={abitareMicocci} alt="Preview del sito di Abitare Micocci" />
                <h2 className={styles.projectTitle}>Abitare Micocci</h2>
                <div className={styles.proDetails}>
                    <p>Sito web realizzato per un negozio di arredamento attraverso i linguaggi HTML, CSS e Javascript. Attraverso l'utilizzo
                        di quest'ultimo linguaggio lo scorrimento verticale del sito è stato reso più gradevole e sono state create delle piccole 
                        gallerie per le immagini. Inoltre è stato condotto uno studio SEO sui testi presenti all'interno del sito, per migliorarne 
                        il posizionamento all'interno del ranking di ricerca Google.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/AbitareMicocci/abitare.github.io' target='_blank'rel="noopener noreferrer" aria-label="Github page" className='btn'>GitHub</a>
                    <a href='https://abitaremicocci.com/' target='_blank'rel="noopener noreferrer" aria-label="Github page"className='btn'>Sito</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={regressionTree} alt="Immagine di un regression Tree Mining" />
                <h2 className={styles.projectTitle}>Regression Tree Mining</h2>
                <div className={styles.proDetails}>
                    <p>Progetto universitario sviluppato in Java. Consiste nel creare un albero di regressione da dei dati che vengono
                        letti da un database o da un file testuale. L'albero viene successivamente percorso attraverso delle regole selezionate
                        dall'utente e infine verrà predetto un dato.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/RegressionTreeJava' target='_blank'rel="noopener noreferrer" aria-label="Github page"className='btn'>GitHub</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={gestionaleDipendenti} alt="Preview del gestionale dipendenti creato"/>
                <h2 className={styles.projectTitle}>Gestionale Dipendenti</h2>
                <div className={styles.proDetails}>
                    <p>Un esempio di gestionale creato con ReactJs per quanto riguarda l'interfaccia web, mentre per il lato backend
                        ho utilizzato la libreria SpringBoot di Java. I dati vengono salvati su un database MySQL in locale. Il pattern
                        co cui è stato creato il progetto è il MVC.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/websiteWorldsInn.github.io' target='_blank'rel="noopener noreferrer" aria-label="Github page"className='btn'>GitHub</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={tcp} alt="Schema del protocollo TCP" />
                <h2 className={styles.projectTitle}>Protocollo TCP</h2>
                <div className={styles.proDetails}>
                    <p>Per la prova in itinere dell'esame di Reti di Calcolatori, ci è stata fornita una traccia per 
                        l'implementazione di una calcolatrice che sfruttasse il protocollo TCP tra un client e un server
                        in locale. Il client richiedeva sotto forma di stringa l'operazione da calcolare e la inviava al 
                        server, dopo aver stabilito la connessione. Il server restituiva la stringa con l'operazione calcolata. 
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/Server_Client_TCP' target='_blank'rel="noopener noreferrer" aria-label="Github page"className='btn'>GitHub</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={udp} alt="Schema del protocollo UDP" />
                <h2 className={styles.projectTitle}>Protocollo UDP</h2>
                <div className={styles.proDetails}>
                    <p>Un esempio di gestionale creato con ReactJs per quanto riguarda l'interfaccia web, mentre per il lato backend
                        ho utilizzato la libreria SpringBoot di Java. I dati vengono salvati su un database MySQL in locale. Il pattern
                        co cui è stato creato il progetto è il MVC.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/Client_Server_UDP' target='_blank'rel="noopener noreferrer" aria-label="Github page" className='btn'>GitHub</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={portfolioTemplate1} alt="Preview di un template per un portfolio" />
                <h2 className={styles.projectTitle}>Portfolio Template</h2>
                <div className={styles.proDetails}>
                    <p>Ho realizzato un piccolo sito web rappresentante un template per un portfolio online o un CV. E' stato sviluppato
                        in HTML, CSS e javascript, rendendolo responsive per essere visualizzato su qualsiasi dispositivo. Non è stato
                        eseguito nessuno studio SEO in merito, in quanto sito prototipo, ciò non toglie che verrà fatto una volta che 
                        qualcuno commissionerà il lavoro.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/TemplaeteWebsite1.github.io' target='_blank'rel="noopener noreferrer" aria-label="Github page" className='btn'>GitHub</a>
                    <a href='https://fedcal.github.io/TemplaeteWebsite1.github.io/' target='_blank'rel="noopener noreferrer" aria-label="Site page" className='btn'>Sito</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={worldsInn} alt="Preview del sito di worlds inn" />
                <h2 className={styles.projectTitle}>Worlds' Inn</h2>
                <div className={styles.proDetails}>
                    <p>Sito web riguardante un progetto relativo ai giochi di ruolo. Realizzato con il linguaggio Sass, HTML  e javascript, il sito è
                        stato creato per sperimentare nuove tecniche di sviluppo e avviare uno studio SEO riguardante un settore di nicchia, in cui
                        bisogna scegliere attentamente i contenuti da esporre e le parole da adottare.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/websiteWorldsInn.github.io'target='_blank'rel="noopener noreferrer" aria-label="Github page" className='btn'>GitHub</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={casaMagnolie} alt="Preview del sito Casa delle Magnolie" />
                <h2 className={styles.projectTitle}>Casa Delle Magnolie</h2>
                <div className={styles.proDetails}>
                    <p>Sito web di una casa vacanza sita a Gallipoli, nel cuore del salento. Sito realizzato con HTML, CSS e Javascript. Anche in questo 
                        progetto è stato condotto uno studio SEO per andare a individuare i termini e gli argomenti relativi al settore turistico che 
                        influenzano il ranking del sito nella ricerca di Google.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/casadellemagnolie.github.io' target='_blank'rel="noopener noreferrer" aria-label="Github page"className='btn'>GitHub</a>
                    <a href='https://casadellemagnolie.com/'target='_blank'rel="noopener noreferrer" aria-label="Github page" className='btn'>Sito</a>
                </div>
            </div>

            <div className={styles.projectCard}>
                <Image loading="lazy" decoding="async" src={pizzeria} alt="Preview del sito template per una pizzeria" />
                <h2 className={styles.projectTitle}>Sito template pizzeria</h2>
                <div className={styles.proDetails}>
                    <p>Ho realizzato un piccolo sito web rappresentante un template per una pizzeria. E' stato sviluppato
                        in HTML, CSS e javascript, rendendolo responsive per essere visualizzato su qualsiasi dispositivo. Non è stato
                        eseguito nessuno studio SEO in merito, in quanto sito prototipo, ciò non toglie che verrà fatto una volta che 
                        qualcuno commissionerà il lavoro.
                    </p>
                </div>
                <div className={styles.proBtns}>
                    <a href='https://github.com/fedcal/template_pizzeria1.github.io' target='_blank'rel="noopener noreferrer" aria-label="Github page"className='btn'>GitHub</a>
                    <a href='https://fedcal.github.io/template_pizzeria1.github.io/'target='_blank'rel="noopener noreferrer" aria-label="Github page" className='btn'>Sito</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard