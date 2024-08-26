import Nav2 from './Nav2'
import Footer from './Footer'
import { useEffect } from 'react'

function OpeningHours() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav2 />
            <div className='container-fluid call'>
                <div className='row sectionOne'>
                    <div className='mt-10 lg:mt-52 d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>Horarios de oficina</h2>
                        <img className='waverSer h-4 lg:h-6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>
                    <div>
                        <p>Estamos totalmente disponibles para que contactes con nosotros por cualquier vía, tanto online como presencial.</p>
                    </div>
                    {/*  LUN-VIER */}
                    <div>
                        <div className="tel w-full lg:w-1/3 mt-5" >
                            <p className="font-bold">Lunes - Viernes: 09:00 - 21:00</p>
                        </div>
                    </div>
                    {/* SAB-DOM */}
                    <div>
                        <div className="tel w-full lg:w-1/3 mt-5" >
                            <p className="font-bold">Sabado - Domingo: Cerrado </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}

export default OpeningHours