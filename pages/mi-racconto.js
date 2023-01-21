import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import HeroImg2 from '../components/Hero/HeroImg2';
import AboutContent from '../components/About/AboutContent';
import Head from 'next/head';
import Esperienze from '../components/Esperienze/Esperienze';
function About() {
  return (
    <div>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
     crossorigin="anonymous"></script>
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
    </div>
  )
}

export default About;