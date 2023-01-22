import AboutContent from "@/components/About/About";
import Esperienze from "@/components/Esperienze/Esperienze";
import Footer from "@/components/Footer/Footer";
import HeroImg2 from "@/components/Hero/HeroImg2";
import Navbar from "@/components/Navbar/Navbar";

const Presentazioni = () =>{
    return (
        <>
            <Navbar/>
            <HeroImg2 heading="Eccomi,"text="mi presento."/>
            <AboutContent/>
            <Esperienze/>
            <Footer/>
        </>
    )
}

export default Presentazioni;