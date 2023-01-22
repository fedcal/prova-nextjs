import Footer from "@/components/Footer/Footer";
import HeroImg2 from "@/components/Hero/HeroImg2";
import Navbar from "@/components/Navbar/Navbar";
import WorkCard from "@/components/Progetti/WorkCard";

const Progetti = () =>{
    return (
        <>
            <Navbar/>
            <HeroImg2 heading="PROGETTI" text="Una panoramica sui progetti che ho sviluppato."/>
            <WorkCard/>
            <Footer/>
        </>
    )
}

export default Progetti;