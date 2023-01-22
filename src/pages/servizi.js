import Footer from "@/components/Footer/Footer";
import HeroImg2 from "@/components/Hero/HeroImg2";
import Navbar from "@/components/Navbar/Navbar";
import ServiziCArd from "@/components/Servizi/ServiziCard";

const Servizi = () =>{
    return (
        <>
            <Navbar/>
            <HeroImg2 heading="SERVIZI"text="Ecco in cosa posso esserti d'aiuto"/>
            <ServiziCArd/>
            <Footer/>
        </>
    )
}

export default Servizi;