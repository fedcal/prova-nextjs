import ContactBoxes from "@/components/Contact/ContactBoxes";
import Footer from "@/components/Footer/Footer";
import HeroImg2 from "@/components/Hero/HeroImg2";
import Navbar from "@/components/Navbar/Navbar";

const Contatti = () =>{
    return (
        <>
            <Navbar/>
            <HeroImg2 heading="CONTATTAMI"text="Compila il forum per lasciarmi un messaggio."/>
            <ContactBoxes/>
            <Footer/>
        </>
    )
}

export default Contatti;