import Footer from "@/components/Footer/Footer";
import HeroImg2 from "@/components/Hero/HeroImg2";
import Navbar from "@/components/Navbar/Navbar";
import WorkCard from "@/components/Progetti/WorkCard";
import Head from 'next/head';
import Script from 'next/script';

const Progetti = () =>{
    return (
        <>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
            crossOrigin="anonymous"></Script>
            <Head>
                <title>Federico Calò - Progetti sviluppati</title>
                <meta name='keywords' content='HTML, ReactJs, sito web, website, Java, Spring Boot, Css, Javascript, Helmet,JavaScript, MySQL, MVC, Protocollo TCP, Protocollo UDP,Portfolio'/>
                <meta name='description' content='Raccolta di progetti sviluppati in diverse tecnologie, le principali sono: Java, ReactJs, SpringBoot, HTML, CSS, Helmet.'/>
                <meta name='robots' content='index,follow'/>
                <meta name='language' content='IT'/>
                <meta name='topic' content='Programmazione e Sviluppo'/>
                <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
                <meta name='og:title' content='Federico Calò - Progetti sviluppati'/>
                <meta name='og:description' content='Raccolta di progetti sviluppati in diverse tecnologie, le principali sono: Java, ReactJs, SpringBoot, HTML, CSS, Helmet.'/>
                <meta name='og:email' content='fedcal01@gmail.com'/>
                <meta name='og:phone_number' content='+39 3332673965'/>
                <meta name="apple-mobile-web-app-title" content="Federico Calò - Progetti sviluppati"/> 
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-fullscreen' content='yes'/>
                <link rel="canonical" href="https://www.federicocalo.dev/progetti" />
                
            </Head>
            <Navbar/>
            <HeroImg2 heading="PROGETTI" text="Una panoramica sui progetti che ho sviluppato."/>
            <WorkCard/>
            <Footer/>
        </>
    )
}

export default Progetti;