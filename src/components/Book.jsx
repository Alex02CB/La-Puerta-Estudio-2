import Nav2 from './Nav2'
import Footer from './Footer'
import FormularioContacto from './formulario/FormularioContacto'
import { useEffect } from 'react';

function Book() {
 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav2 />
            <div className='container-fluid'>
                <div className='row sectionOne'>
                    <div className='mt-10 lg:mt-52 d-flex justify-content-between mb-xs-0  mb-xl-5 col-lg-12 col-md-12 col-12'>
                        <h2>Reserva tu servicio</h2>
                        <img className='waverSer h-4 lg:h-6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>
                    <div className='mt-2.5'>
                        <p>Haz aquí tu reserva de forma rápida.</p>
                    </div>
                </div>
            </div>

            <FormularioContacto />

            <Footer />
        </>
    )

}

export default Book