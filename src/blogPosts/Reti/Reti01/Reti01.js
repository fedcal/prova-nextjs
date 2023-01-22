import SchemaRete from '../../../../public/SchemaReti.webp';
import HomeReti from '../../../../public/rdc_1900.webp';
import AccessoViaCavo from '../../../../public/AccessoViaCavo.webp';
import AccessoAziendale from '../../../../public/AccessoAziendale.webp';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Reti01.module.css';

const Reti01 = () => {
    return (
        <article itemScope itemType="https://schema.org/BlogPosting">

            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/rdc_1900.webp" />
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/SchemaReti.webp" />
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/AccessoViaCavo.webp" />
            <meta itemProp="image" content="https://www.federicocalo.dev/static/media/AccessoAziendale.webp" />

            <section className='post-header'>
                <div className='header-content post-container'>
                    
                    <Image loading="lazy" decoding="async" src={HomeReti} alt="Logo della pagina riferita alla materia reti di calcolatori" className='header-img'title='Reti di calcolatori'/>
                </div>
            </section>
            <section className='post-content post-container'>
                <h1 className='header-title' itemProp="headline">1. Introduzione alle reti</h1>
                <span  itemProp="author" itemScope itemType="https://schema.org/Person"><a itemProp="url" href='https://www.federicocalo.dev' className='autore'><span itemProp="name">Federico Calò</span></a></span> <time dateTime="2022-11-01" className='data' itemProp="datePublished" content="2022-11-01T07:30:00+08:00">1/11/2022</time>
                <h2 className='sub-heading'>Definizione di Internet</h2>
                
                <p className='post-text'>Possiamo definire Internet come una rete di calcolatori che connette miliardi di dispositivi sparsi in tutto il mondo. Tutti gli strumenti che utilizziamo attualmente e che sono connessi a Internet, come le Tv, gli elettrodomestici o gli orologi, vengono chiamati in gergo <strong> host</strong> o  <strong>sistemi periferici</strong>. Questi sistemi periferici sono connessi tra loro tramite una <strong>rete di collegamenti</strong> (communication link) e <strong>commutatori di pacchetti</strong> (packet switch), effettuati tramite diversi tipi di collegamenti.</p>
                
                <div className='box-image'>
                    <Image loading="lazy" decoding="async" src={SchemaRete} alt="Schema della tipologia delle reti" className='post-img1'title='Figura 1: tipologia di schema di rete'/>
                    <p className='image-capture'>Figura 1: Tipologia schema rete</p>
                </div>
                
                <p className='post-text'>Collegamenti diversi possono trasmettere dati a velocità differenti definite come <strong>velocità di trasmissione</strong> (transmission rate) e misurata in bit/secondo (bps).
                Quando un sistema periferico vuole inviare dati a un altro sistema periferico, suddivide i dati in sotto parti e aggiunge un'intestazione a ciascuna di esse. L'insieme delle informazioni risultanti viene chiamato <strong>pacchetto</strong>.
                Questi pacchetti vengono inviati attraverso la rete alla destinazione, dove vengono in seguito riassemblati per ottenere i dati originari. Un commutatore di pacchetti prende un pacchetto che arriva da uno dei collegamenti in ingresso e lo ritrasmette su uno di quelli in uscita.
                I principali commutatori di pacchetti sono i <strong>router</strong> e i <strong>commutatori a livello di collegamento</strong> (link-layer switch), ma ne esistono anche altri di diversa forma e natura. I commutatori a livello di collegamento sono usati nelle reti di accesso, mentre i router nel nucleo della rete.
                La sequenza di collegamenti che i pacchetti attraversano è nota come <strong>percorso o cammino</strong>(route o path).</p>

                <p className='post-text'>I sistemi periferici accedono a Internet tramite determinati provider denominati <strong>Internet service provider (ISP)</strong>, i quali possono essere di diversi livelli, in base alla loro funzione e al tipo di connessione che effettuano. Per scambiare pacchetti vi sono principalmente due tipi di protocolli denominati 
                <strong> transmission control protocl (TCP)</strong> e l'<strong>Internet protocol (IP)</strong> E' fondamentale un accordo sulle funzioni svolte da ogni singolo protocollo, per questo sono stati creati degli standard, denominati appunto <strong>standard di Internet</strong> e sono sviluppati dall'IETF.</p>

                <p className='post-text'>Tutte le applicazioni che si basano su Internet, prendono il nome di <strong>applicazioni distribuite</strong>, in quanto coinvolgono più sistemi periferici che si scambiano reciprocamente dati. I sistemi periferici collegati a Internet forniscono un'<strong>interfaccia socket </strong> che specifica come un programma eseguito
                su un sistema periferico possa chiedere a Internet di recapitare dati a un programma eseguito su un altro sistema periferico. L'interfaccia socket consiste in un insieme di regole che il programma mittente deve seguire in modo che i dati siano recapitati correttamente.</p>
            
                <p className='post-text'>Un <strong>protocollo di rete</strong> consiste nella modalità in cui diverse entità si scambiano messaggi attraverso la rete. Ogni attività tra due o più entità svolta tramite Internet deve essere gestita attraverso dei protocolli. Se volessimo dare una <i>definizione formale</i> di protocollo, possiamo definirlo come
                la definizione del formato e l'ordine dei messaggi scambiati tra due o più entità in comunicazione, definendo anche le azioni che coinvolgono la trasmissione e di ricezione di un messaggio o di un particolare evento.</p>
                
                <p className='post-text'>I diversi protocolli che esistono in rete vengono utilizzati tra i vari componenti della rete. I pc, i server o i dispositivi mobili vengono considerati <strong>sistemi periferici</strong> della rete e prendono il nome anche di <strong>host</strong> in quanto ospitano ed eseguono programmi applicativi quali browser, web server o software.
                Talvolta possiamo differenziare gli host in due ruoli: <i>client</i> o <i>server</i>. In generale i client sono host che richiedono dei servizi, mentre i server si occupano di erogare dei servizi. Questi sistemi periferici accedono alla rete attraverso le <strong>reti di accesso</strong> (access network), ovvero la rete che connette fisicamente un sistema al suo  
                <strong> edge router</strong> (router di bordo) che rappresenta il primo router sul percorso dal sistema di origine verso qualsiasi altro sistema di destinazione posizionato al di fuori della rete di accesso.</p>
            
                <p className='post-text'>Esistono diversi tipi di accessi, divisi in base alla mole di dati che bisogna trasmettere, al quantitativo di host che bisogna connettere e alle diverse tecnologie coinvolte per la loro realizzazione. Per quanto riguarda <i>gli accessi residenziali</i>, ve ne sono di due tipi: il <strong>digital subscriber line</strong> (DSL) e quello <strong>via cavo</strong>. Un accesso di tipo DSL 
                viene generalmente fornito dalla stessa compagnia telefonica che fornisce il servizio di telefonia fissa. In questo particolare caso, la compagnia telefonica assume anche il ruolo di ISP. Viene installato un modem DSL che  scambia dati con un digital subscriber line access multiplex <i>(DSLAM)</i> che si trova locato nella centrale locale della compagnia telefonica. Il modem DSL residenziale converte i dati digitali 
                in toni ad alta frequenza per poterli trasmettere alla centrale locale sul cavo telefonico. Successivamente i segnali analogici in arrivo dalle abitazioni vengono riconvertiti in formato digitale nel DSLAM.</p>
            
                <p className='post-text'> Le linee telefoniche residenziali trasportano contemporaneamante dati e segnali telefonici codificandoli in tre bande di frequenza non sovrapposte:</p>
                
                <ul>
                    <li>un canale di downstreamad alta velocità verso l'abitazione, con una banda tra i 50kHz e 1MHz</li>
                    <li>un canale di upstream a velocità media verso il DSLAM, nella banda tra i 4 e i 50 kHz</li>
                    <li>un canale telefonico ordinario a due vie con una banda tra i 0 e i 4 kHz</li>
                </ul>
                
                <p className='post-text'>Mediante questo approccio, un singolo collegamento DSL appare come tre collegamenti separati, garantendo in questo modo la condivisione dello stesso collegamento tra una chiamata telefonica e una connessione a Internet. Questa tecnica prende il nome di <i>multiplexing a divisione di frequenza</i>. Inoltre questo tipo di accesso prende il nome di 
                accesso asimmetrico, in quanto le due velocità di upstream e downstream sono diverse e possono essere anche inferiori a quelle definite dagli standard, in quanto il provider può limitare il tasso di trasmissione. La DSL è stata progetta per distanze piccole e utilizza infrastrutture già presenti e messe a disposizione dalla compagnia.</p>
                
                <div className='box-image'>
                    <Image loading="lazy" decoding="async" src={AccessoViaCavo} alt="Schema di rete ad accesso in forma ibrida" className='post-img2'title='Figura 2: Rete di accesso in formma ibrida'/>
                    <p className='image-capture'>Figura 2: Rete di accesso in forma ibrida (fibra e cavo coassiale)</p>
                </div>
                
                <p className='post-text'>A differenza della DSL, l'<strong>accesso a Internet via cavo</strong> sfrutta le infrastrutture della televisione, attraverso delle fibre ottiche che connettono la terminazione del cavo a giunzioni a livello di quartiere, dalle quali parte il cavo coassiale per la distribuzione mediante la quale si raggiungono le singole case e appartamenti. Tale sistema viene generalmente 
                definito <i>hybrud fiber coax (HFC)</i>. L'accesso a Internet viene supportato attraverso particolari modem definiti <strong>cable modem</strong>, al quale ci si connette attraverso una porta Ethernet. La rete viene divisa in due canali: uno per il <i>dowstream</i> e uno per il <i>upstream</i>. A questi canali si accede in maniera asimmetrica. In America sta prendendo piede la tecnologia <strong>FTTH </strong> 
                 (fiber to the home), con velocità maggiori in quanto viene fornita la fibra ottica direttamente all'abitazione. Quest'ultima utilizza un terminale ottico denominato <strong>ONT</strong>, al quale viene connesso un separatore ottico di quartiere al quale viene dedicata una fibra ottica.</p>
                
                <div className='box-image'>
                    <Image loading="lazy" decoding="async" src={AccessoAziendale} alt="Schema di rete ad accesso aziendale e residenziale" className='post-img2' title='Figura 3: Accesso aziendale e residenziale'/>
                    <p className='image-capture'>Figura 3: Accesso aziendale e residenziale</p>
                </div>
                
                <p className='post-text'>Nella tipologia dell'<strong>accesso aziendale</strong> si utilizza una <i>rete locale (LAN)</i> per connettere i sistemi periferici al router di bordo. Vi sono diverse tipologie di LAN, la più diffusa è quella Ethernet, la quale utilizza un doppino in rame intrecciato per collegare numerosi sistemi periferici tra loro e connetterli a uno switch. Lo switch viene poi connesso a sua volta a Internet.
                All'interno di una rete LAN wirless gli utenti trasmettono e ricevono pacchetti entro un raggio di poche decine di metri da e verso un access point wireless connesso a una rete aziendale.</p>
                
                <p className='post-text'>Un'ultima tipologia di accesso ad Internet è rappresentata dall'<strong>accesso wireless su scala geografica</strong> attraverso tecnologie 3G, 4G, 5G e LTE che forniscono l'accesso a dispositivi mobili a diverse velocità.</p>    

                <div className="succ-post">
                    <Link href="/Reti-di-Calcolatori-Vari-Tipi-Di-Commutazione">Post successivo &#8594;</Link>
                </div>
            </section>
        </article>
    )
}

export default Reti01;