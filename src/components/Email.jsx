import Nav2 from "./Nav2"
import Footer from "./Footer"
import { useEffect } from "react"

function Email() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav2 />
            <div className='container-fluid email'>
                <div className='row sectionOne'>
                    <div className='mt-10 lg:mt-52 d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>Email</h2>
                        <img className='waverSer h-4 lg:h-6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>
                    <div className='mt-2.5'>
                        <p>Para cualquier consulta envíanos un correo electrónico.</p>
                    </div>
                    <div className="mailto w-5/6 lg:w-1/3 mt-5" >
                        <a className="font-bold" href="mailto:lapuertaestudios@grupoduende.com">lapuertaestudios@grupoduende.com</a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Email