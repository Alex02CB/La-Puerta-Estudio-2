import Nav2 from './Nav2'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function ContactUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav2 />
            <div className='container-fluid ContactUS'>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-xs-0 mb-xl-5 mt-10 lg:mt-52  col-lg-12 col-md-12 col-12'>
                        <h2>Contáctanos</h2>
                        <img className='waverSer h-4 lg:h-6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>

                        <div className='point'>
                            <img src="/point.svg" />
                        </div>
                        <p className='mt-2'>Vía email, teléfono, o visitándonos.</p>
                    <div className='d-flex linksContactUS'>
                        <div className='w-1/6 border-2 border-b-black border-t-white border-r-white border-l-white p-0  mt-5 d-flex  justify-content-between'>
                            <Link to="/book">Reserva</Link>
                        </div>
                        <div className='w-1/6 border-2 border-b-black border-t-white border-r-white border-l-white p-0  mt-5 ml-5  d-flex  justify-content-between'>
                            <Link to="/email">Email</Link>
                        </div>
                        <div className='w-1/6 border-2 border-b-black border-t-white border-r-white border-l-white p-0  mt-5 ml-5  d-flex  justify-content-between'>
                            <Link to="/call">Llama</Link>
                        </div>

                    </div>

                    <div className='d-flex linksContactUS'>
                        <div className='w-1/6 border-2 border-b-black border-t-white border-r-white border-l-white p-0  mt-5 d-flex justify-content-between'>
                            <Link to="/openingHours">Horario</Link>
                        </div>
                        <div className='w-1/6 border-2 border-b-black border-t-white border-r-white border-l-white p-0  mt-5 ml-5  d-flex  justify-content-between'>
                            <Link to="/encuentranos">Encuéntranos</Link>
                        </div>
                    </div>

                    <div className='linksContactUSmobile'>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <Link to="/book"><p className='font-extrabold'>Reserva</p></Link>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <Link to="/email"><p className='font-extrabold'>Email</p></Link>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <Link to="/call"><p className='font-extrabold'>Llama</p></Link>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <Link to="/openingHours"><p className='font-extrabold'>Horario</p></Link>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <Link to="/encuentranos"><p className='font-extrabold'>Encuéntranos</p></Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs