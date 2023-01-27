import LogoRDC from '../../../public/RetiDiCalcolatori_500.webp';
import LogoLibri from '../../../public/libri_500.webp';
import LogoIum from '../../../public/ium_500.webp';
import LogoIcon from '../../../public/icon_500.webp';
import LogoStudyCase from '../../../public/caseStudy_500.webp';
import LogoCC from '../../../public/cc_500.webp';
import LatexImg from '../../../public/LaTeX_logo.webp';
import Link from 'next/link';
import styles from '@/styles/BlogBoxes.module.css';
import Image from 'next/image';


const BlogBoxes = () => {
    return (
        <div className={styles.container} >
            <div className={[styles.postFilter, styles.container].join(' ')} >
                <span className={[styles.filterItem, styles.activeFilter, 'filterItem'].join(' ')} data-filter='all'>Tutti</span>
                <span className={[styles.filterItem, 'filterItem'].join(' ')} data-filter='uni'>Appunti Università</span>
                <span className={[styles.filterItem, 'filterItem'].join(' ')} data-filter='libri'>Libri</span>
                <span className={[styles.filterItem, 'filterItem'].join(' ')} data-filter='casestudy'>Case Study</span>
                <span className={[styles.filterItem, 'filterItem'].join(' ')} data-filter='altro'>Altro</span>
            </div>
            <section className={[styles.post, styles.container,styles.section].join(' ')}>


                <article  itemScope  itemType="https://schema.org/BlogPosting" className={['postBox uni', styles.postBox, styles.uni, styles.all].join(' ')}>
                    <Image loading="lazy" decoding="async" src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className={styles.postImg} title='reti di calcolatori'/>
                    <h3 className={styles.category}>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className={styles.postTitle}>1. Introduzione alle reti </h1>
                    <time dateTime="2022-11-01" className={styles.postDate} temprop="datePublished" content="2022-11-01T08:00:00+08:00"> 1 Novembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span>
                    <p className={styles.postDescription}>Introduzione alle reti di calcolatori, fornendo un&apos;immagine di come si è evoluta l&apos;infrastruttura di Internet, analizzando i due tipi di commutazione delle informazioni presenti in essa e i vari parametri di valutazione.</p>
                    <div className={styles.link}>
                        <Link href="/Reti-di-Calcolatori-Introduzione" className={styles.pulsante}>Leggi Post</Link>
                    </div>
                </article>

                <article  itemScope  itemType="https://schema.org/BlogPosting" className={['postBox uni', styles.postBox, styles.libri, styles.all].join(' ')}>
                    <Image loading="lazy" decoding="async" src={LogoRDC} alt="Logo riferito ai post della materia reti di calcolatori" className={styles.postImg} title='reti di calcolatori'/>
                    <h3 className={styles.category}>Appunti Universitari - Reti di Calcolatori</h3>
                    <h1 className={styles.postTitle}>1. Introduzione alle reti </h1>
                    <time dateTime="2022-11-01" className={styles.postDate} temprop="datePublished" content="2022-11-01T08:00:00+08:00"> 1 Novembre 2022</time> <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span>
                    <p className={styles.postDescription}>Introduzione alle reti di calcolatori, fornendo un&apos;immagine di come si è evoluta l&apos;infrastruttura di Internet, analizzando i due tipi di commutazione delle informazioni presenti in essa e i vari parametri di valutazione.</p>
                    <div className={styles.link}>
                        <Link href="/Reti-di-Calcolatori-Introduzione" className={styles.pulsante}>Leggi Post</Link>
                    </div>
                </article>

            </section>
        </div>
    )
}

export default BlogBoxes;