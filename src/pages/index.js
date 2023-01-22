import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroImg from '@/components/Hero/HeroImg';
import AboutContent from '@/components/About/About';
import WorkCardPreview from '@/components/Progetti/WorkCardPreview';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    <div className={styles.container}>
      <Navbar/>
      <HeroImg/>
      <AboutContent/>
      <WorkCardPreview/>
      <Footer/>
    </div>

  )
}
