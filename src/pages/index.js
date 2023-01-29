import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroImg from '@/components/Hero/HeroImg';
import AboutContent from '@/components/About/About';
import WorkCardPreview from '@/components/Progetti/WorkCardPreview';
import Script from 'next/script';




export default function Home() {
  const schemaData={
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Federico Calò",
    birthDate: "07/051998",
    email:"fedcal01@gmail.com",
    jobTitle: "Software Developre",
    knowsAbout: ["Developer", "Computer Science"],
    telephone: "+39 3332673965",
    url: "http://www.federicocalo.dev",
    hasOccupation:[ {
      "@type": "Occupation",
      "name": "Software Developer",
      "educationRequirements": "PhD in computer science"
    },
    {
      "@type": "Software Developer",
      "hasOccupation": {
      "@type": "Occupation",
      "name": "WebScience",
      },
      "startDate": "02022021",
      "endDate": "29102021"
    },
    {
      "@type": "Software Developer",
      "hasOccupation": {
      "@type": "Occupation",
      "name": "Links Management and Tecnology",
      },
      "startDate": "14062022",
    }
  ]

  }
  return (
  
    <div className={styles.container}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S3TS9T66B6"></Script>
      <Script id="Script1">{`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-S3TS9T66B6");`}
      </Script>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} id="Script2"/>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9556331893712433"
        crossOrigin="anonymous"></Script>
      <Script src="https://code.jquery.com/jquery-3.6.1.js"  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossOrigin="anonymous"></Script>
      <Head>
      <meta charset="UTF-8" />
      <meta name="robots" content="index, follow, max-snippet:[100]" />
      <meta name="googlebot" content="index, follow, max-snippet:[100], max-image-preview:[standard]"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"/>
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"/>

      <link rel="manifest" href="/manifest.json" crossorigin="anonymous" />
      <link rel="icon" type="img/png" href="/favc.png" />
        <meta name="description" content="Sviluppo applicazioni web, sistemi gestionali, siti web per la propria attività. Linguaggi e Framework utilizzati: Java, Python, C, C++, Spring Boot, MERN."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Federico Calò: Federico Calò - Full Stack Developer, Software e Data analyst "/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Sviluppatore software con la passione dell'informatica sin dalle superiori. Mi piace divulgare contenuti scientifici a tema informatico e sviluppare software." />
        <meta name="description" content="Sviluppo applicazioni web, sistemi gestionali, siti web per la propria attività. Linguaggi e Framework utilizzati: Java, Python, C, C++, Spring Boot, MERN."/>
        <meta name="keywords" content="siti web, Java, C, C++, MongoDB, MySQL, MERN, JavaFX, Data Analysis, HTML, CSS, JavaScript, Spring Boot, React, Python, intelligienza artificiale, sistemi gestionali, applicazioni web, applicazioni cloud, Software Architecture, Software Developer. "/>
        <meta name="author" content="Federico Calò"/>
        <link rel="canonical" href="https://www.federicocalo.dev/" />
        <meta property="og:image" content="https://www.federicocalo.dev/public/profilo.jpg"/>

        <meta name='language' content='IT'/>
        <meta name='topic' content='Programmazione e Sviluppo'/>
        <meta name='author' content='Federico Calò, fedcal01@gmail.com'/>
        <meta name='og:email' content='fedcal01@gmail.com'/>
        <meta name='og:phone_number' content='+39 3332673965'/>
        <meta name="apple-mobile-web-app-title" content="Federico Calò - Full Stack Developer, Software e Data analyst "/> 
        <meta name='apple-mobile-web-app-capable' content='yes'/>
        <meta name='apple-touch-fullscreen' content='yes'/>
        <title>Federico Calò - Full Stack Developer, Software e Data analyst</title>

      </Head>
      <Navbar/>
      <HeroImg/>
      <AboutContent/>
      <WorkCardPreview/>
      <Footer/>
    </div>

  )
}
