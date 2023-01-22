import AboutContent from "@/components/About/About";
import Esperienze from "@/components/Esperienze/Esperienze";
import Footer from "@/components/Footer/Footer";
import HeroImg2 from "@/components/Hero/HeroImg2";
import Navbar from "@/components/Navbar/Navbar";
import Head from 'next/head';
import Script from 'next/script';

const Presentazioni = () =>{
    return (
        <>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossOrigin="anonymous"></Script>
            <Head>
                
                <title>Federico Calò - Mi presento</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='Analisi software, analista software, sviluppatore junior, analisi as-is, analisi to-be, evolutive SEO, Liferay, LAurea informatica,HTML, ReactJs, sito web, website, Java, Spring Boot, Css, Javascript, Helmet, JavaScript, MySQL, Portfolio, Università di Bari, Università Aldo Moro di Bari, Università Aldo Moro, JavaFX, Python'/>
                <meta name='description' content='Presentazopni di Federico Calò, dove ha studiato e le sue abilità principali.'/>
                <meta name='robots' content='index,follow'/>
                <meta name='language' content='IT'/>
                <meta name='topic' content='Programmazione e Sviluppo'/>
                <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
                <meta name='og:title' content='Federico Calò - Mi presento'/>
                <meta name='og:description' content='Presentazopni di Federico Calò, dove ha studiato e le sue abilità principali.'/>
                <meta name='og:email' content='fedcal01@gmail.com'/>
                <meta name='og:phone_number' content='+39 3332673965'/>
                <meta name="apple-mobile-web-app-title" content="Federico Calò - Mi presento"/> 
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-fullscreen' content='yes'/>
                <link rel="canonical" href="https://www.federicocalo.dev/presentazioni" />
            </Head>
            <Navbar/>
            <HeroImg2 heading="Eccomi,"text="mi presento."/>
            <AboutContent/>
            <Esperienze/>
            <Footer/>
        </>
    )
}

export default Presentazioni;