import Footer from "@/components/Footer/Footer";
import HeroImg2 from "@/components/Hero/HeroImg2";
import Navbar from "@/components/Navbar/Navbar";
import ServiziCArd from "@/components/Servizi/ServiziCard";
import Head from 'next/head';
import Script from 'next/script';

const Servizi = () =>{
    return (
        <>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossOrigin="anonymous"></Script>
            <Head>
                <meta name='keywords' content='Copywriter, redazione testi, ottimizzazione testi, tecniche SEO, Social Management,Gestione dei profili social, gestione della pubblicazione dei post,aumento del numero di followers'/>
                <meta name='description' content='Servizi offerti da Fedeirco Calò per la creazione di siti web, gestionali o software per la propria azienda. Analisi dei dati e documentazione tecnica funzionale.'/>
                <meta name='robots' content='index,follow'/>
                <meta name='language' content='IT'/>
                <meta name='topic' content='Programmazione e Sviluppo'/>
                <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
                <meta name='og:title' content='Federico Calò - Servizi'/>
                <meta name='og:description' content='Raccolta di progetti sviluppati in diverse tecnologie, le principali sono: Java, ReactJs, SpringBoot, HTML, CSS, Helmet.'/>
                <meta name='og:email' content='fedcal01@gmail.com'/>
                <meta name='og:phone_number' content='+39 3332673965'/>
                <meta name="apple-mobile-web-app-title" content="Federico Calò - Servizi"/> 
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-fullscreen' content='yes'/>
                <title>Federico Calò - Servizi</title>
                <link rel="canonical" href="https://www.federicocalo.dev/servizi" />
                
            </Head>
            <Navbar/>
            <HeroImg2 heading="SERVIZI"text="Ecco in cosa posso esserti d'aiuto"/>
            <ServiziCArd/>
            <Footer/>
        </>
    )
}

export default Servizi;