import Nav2 from './Nav2'
import Footer from './Footer'
import { useEffect } from 'react'

function Call() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav2 />
            <div className='container-fluid call'>
                <div className='row sectionOne'>
                    <div className='mt-10 lg:mt-52 d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>Danos un toque</h2>
                        <img className='waverSer h-4 lg:h-6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>
                    <div>
                        <p>No dudes en contactarnos para cualquier duda o consulta.</p>
                    </div>
                    {/* ROCA */}
                    <div>
                        <div className="tel w-full lg:w-1/3 mt-5" >
                            <a className="font-bold" href="tel:+34633970780">Carlos Roca</a>
                        </div>
                        <p>Studio Manager - Productor </p>
                    </div>
                    {/* ULISES */}
                    <div>
                        <div className="tel w-full lg:w-1/3 mt-5" >
                            <a className="font-bold" href="tel:+34638304500">Ulises Ramos</a>
                        </div>
                        <p>Productor musical - Musico studio</p>
                    </div>
                    {/* CHEMA */}
                    <div>
                        <div className="tel w-full lg:w-1/3 mt-5" >
                            <a className="font-bold" href="tel:+34666899764">Jose Manuel Peláez</a>
                        </div>
                        <p>Jefe técnico</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}

export default Call