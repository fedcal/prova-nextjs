import React from 'react';
import '../../styles/ServiziCard.module.css';
import { Link } from 'react-router-dom';

function ServiziCArd() {
  return (
    <div className='servizi'>
        
        <div className='card-container'>
            <div className='card'>
                <h3>Copywriter</h3>
                <p>
                    Redazione e ottimizzazione di testi per blog, testate giornalistiche o contenuti per finalità pubblicitarie. Tutti i testi sono ottimizzati attraverso l&apos;utilizzo corretto di varie tecniche 
                    SEO.
                </p>
                <Link to="/contatti" className='btn btn-container'>Info</Link>
            </div>
            <div className='card'>
                <h3>Social Management</h3>
                <p>
                    Gestione dei profili social, gestione della pubblicazione dei post in base al proprio target, descrizioni create seguendo la SEO e analisi dei dati della dashboard. Tutte le attività 
                    sono finalizzate al raggiungimento di un pubblico sempre più vasto e all&apos;aumento del numero di followers, delle visualizzazioni e delle interazione in generale.
                </p>
                <Link to="/contatti" className='btn'>Info</Link>
            </div>
        </div>
    </div>
  )
}

export default ServiziCArd;