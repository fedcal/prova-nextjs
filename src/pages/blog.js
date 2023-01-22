import BlogBoxes from "@/components/BlogBoxes/BlogBoxes"
import Footer from "@/components/Footer/Footer"
import HeroImg2 from "@/components/Hero/HeroImg2"
import Navbar from "@/components/Navbar/Navbar"
import Head from "next/head"
import Script from 'next/script'


const Blog = ()=>{
    return (
        <>
            <Script src="/script.js" crossOrigin="anonymous"/>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
                crossOrigin="anonymous"></Script>
            <Head>
                <title>Federico Calò - Blog Personale</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='Mondo informatico, blog personale, libri settoriali, libri informatica, hard skills, soft skills,blog informatica, appunti università, appunti universitari, reti di calcolatori, Libri, interazione uomo macchina, calcolabilità e complessità, ingegneria della conoscenza, study case, reti, commutazione, due tipi di commutazione,
                gestionale associativo, sviluppo, utente, agente, spazio di progettazione, progettazione, applicazioni, applicazioni prototipiche, architettura, funzioni agenti, controlli, azioni'/>
                <meta name='description' content='Blog personale di Federico Calò relativo al mondo informatico, in cui si condividono anche appunti universitari e letture interessanti che aiutano a sviluppare le skill tecniche del settore.'/>
                <meta name='robots' content='index,follow'/>
                <meta name='language' content='IT'/>
                <meta name='topic' content='Programmazione e Sviluppo'/>
                <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
                <meta name='og:title' content='Federico Calò - Blog Personale'/>
                <meta name='og:description' content='Blog personale di Federico Calò relativo al mondo informatico, in cui si condividono anche appunti universitari e letture interessanti che aiutano a sviluppare le skill tecniche del settore.'/>
                <meta name='og:email' content='fedcal01@gmail.com'/>
                <meta name='og:phone_number' content='+39 3332673965'/>
                <meta name="apple-mobile-web-app-title" content="Federico Calò - Blog Personale"/> 
                <meta name='apple-mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-fullscreen' content='yes'/>
                <link rel="canonical" href="https://www.federicocalo.dev/blog" />
            </Head>
            <Navbar/>
            <HeroImg2 heading="Blog"text="condivisione di esperienze e sapere."/>
            <BlogBoxes/>
            <Footer/>
        </>
    )
}

export default Blog