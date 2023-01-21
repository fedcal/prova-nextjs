import React from 'react';
import '../../styles/WorkCard.module.css';
import abitareMicocci from '../assets/abitaremicocci.webp';
import portfolio from '../assets/portfolio.webp';
import regressionTree from '../assets/tree3.webp';
import {Link} from 'react-router-dom';
import Image from 'next/image';

function WorkCardPreview() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Alcuni Progetti</h1>
        <div className='project-container'>
            
            <div className='project-card'>
                <Image src={portfolio} alt="preview del sito personale"/>
                <h2 className='project-title'>Portfolio Personale</h2>
                <div className='pro-details'>
                    <p>Nato come progetto sviluppato nel tempo libero, questo mio sito web è stato realizzato interamente con la 
                        libreria ReactJs e svariate librerie Javascript. La principale è la libreria Helmet.js, la quale supporta 
                        lo sviluppo web per la gestione dinamica delle keyword delle varie pagine, migliorando significativamente la 
                        SEO del sito.
                    </p>
                </div>
                <div className='pro-btns'>
                    <a href='https://github.com/fedcal/portfolio-personale-reactjs' className='btn'>GitHub</a>
                    <a href='https://federicocalo.dev/' className='btn'>Sito</a>
                </div>
            </div>

            <div className='project-card'>
                <Image src={abitareMicocci} alt="Preview del sito di Abitare Micocci"/>
                <h2 className='project-title'>Abitare Micocci</h2>
                <div className='pro-details'>
                    <p>Sito web realizzato per un negozio di arredamento attraverso i linguaggi HTML, CSS e Javascript. Attraverso l&apos;utilizzo
                        di quest&apos;ultimo linguaggio lo scorrimento verticale del sito è stato reso più gradevole e sono state create delle piccole 
                        gallerie per le immagini. Inoltre è stato condotto uno studio SEO sui testi presenti all&apos;interno del sito, per migliorarne 
                        il posizionamento all&apos;interno del ranking di ricerca Google.
                    </p>
                </div>
                <div className='pro-btns'>
                    <a href='https://github.com/AbitareMicocci/abitare.github.io' className='btn'>GitHub</a>
                    <a href='https://abitaremicocci.com/' className='btn'>Sito</a>
                </div>
            </div>

            <div className='project-card'>
                <Image src={regressionTree} alt="Immagine di un regression Tree Mining"/>
                <h2 className='project-title'>Regression Tree Mining</h2>
                <div className='pro-details'>
                    <p>Progetto universitario sviluppato in Java. Consiste nel creare un albero di regressione da dei dati che vengono
                        letti da un database o da un file testuale. L&apos;albero viene successivamente percorso attraverso delle regole selezionate
                        dall&apos;utente e infine verrà predetto un dato.
                    </p>
                </div>
                <div className='pro-btns'>
                    <a href='https://github.com/fedcal/RegressionTreeJava' className='btn'>GitHub</a>
                </div>
            </div>
        </div>
        <div className='project-heading'>
        <Link to='/progetti'className='btn'>Tutti i progetti</Link>
        </div>
        
        
    </div>
  )
}

export default WorkCardPreview;