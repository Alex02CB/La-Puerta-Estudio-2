import Nav2 from './Nav2'
import Footer from './Footer'
import { useEffect } from 'react'

function Encuentranos() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <Nav2 />
            <div className='container-fluid call'>
                <div className='row sectionOne'>
                    <div className='mt-10 lg:mt-52 d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>Encuéntranos</h2>
                        <img className='waverSer h-4 lg:h-6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>
                    <div>
                        <p>Cuesta Alhacaba 11. 18010, Granada. España.</p>
                    </div>
                    <div className='buttonMapsEncuentranos lg:w-1/6 w-1/2'>
                        <a target="_blank" href='https://www.google.com/maps/dir//Cta.+de+Alhacaba,+11,+Albaic%C3%ADn,+18010+Granada/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd71fcc16cbc1737:0x2b0e9f3e2e7111c8?sa=X&ved=1t:707&ictx=111'>Google Maps</a>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}

export default Encuentranos