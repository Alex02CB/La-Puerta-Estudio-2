import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import '../styles.scss'
import './smoothScroll/SmoothScroll'
import SmoothScroll from './smoothScroll/SmoothScroll'
import SmoothScroll2 from './smoothScroll/SmoothScroll2'
import DownloadEstudioPDF from './descargar/DownloadEstudioPDF'

const imgStudioExperience = {

    img1: {
        backgroundImage: 'url(/exteriorLaPuerta.jpeg)',
    },
    img2: {
        backgroundImage: 'url(/lapuertaboutiqueHome.jpeg)',
    },
    img3: {
        backgroundImage: 'url(/Formaciones.png)',
    },
    img4: {
        backgroundImage: 'url(/imgEstudio/pedales.jpg)'
    }

};

function StudioExperience() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav></Nav>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='bannerStudioExperience'>
                            <video autoPlay loop muted playsInline className="video-background">
                                <source src="/imgEstudio/VideoEstudio.mp4" type="video/mp4" />
                                Tu navegador no soporta el video HTML5.
                            </video>
                            <video autoPlay loop muted playsInline className="video-mobile">
                                <source src="/imgEstudio/VideoEstudioMobile.mp4" type="video/mp4" />
                                Tu navegador no soporta el video HTML5.
                            </video>
                        </div>
                    </div>
                </div>

            </motion.div>

            <div className='container-fluid '>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>Estudio</h2>
                        <img className='h-4 lg:h-6 w-1/6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>

                    <div className='point'>
                        <img src="/point.svg" />
                    </div>

                    <div className='mt-3 col-lg-12 col-md-12 col-12'>
                        <div className='d-flex'>
                            <div className='col-lg-6 col-md-11 col-12'>
                                <p className=' col-lg-10 col-md-8 col-12 '>Un espacio en pleno centro de la  ciudad y de fácil acceso, totalmente insonorizado y acondicionado acústicamente por la empresa catalana Audioacústica.</p>
                            </div>
                        </div>

                        <div className='contactanosEstudio col-lg-3 col-md-6 col-12 '>
                            <Link to="/contactus">
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <p>Contáctanos</p>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </Link>
                        </div>
                        {/* Boton movil 1 */}
                        <div className='divbotonContactanos'>
                            <Link to="/contactus" className='boton'>Contáctanos</Link>
                        </div>
                    </div>

                    <div className='col-lg-12 sectionOneImg'>
                        <img src="imgEstudio/estudio.jpeg" alt="La Puerta Estudios" />
                    </div>
                </div>
            </div>

            <SmoothScroll />
            <SmoothScroll2 />

            {/* Equipo disponible */}

            <section>

                <div className='container-fluid'>
                    <div className="row EstudioEND">
                        <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                            <h2>Equipo disponible</h2>
                            <img className='imgNota' src="imgEstudio/nota.svg" alt="La Puerta Estudios" />
                        </div>

                        <div>
                            <p className=' col-lg-6 col-md-8 col-12 mt-lg-5'>Dispón de un ambiente preparado con infinidad de herramientas para dar forma a tus producciones.</p>
                            <p className=' col-lg-6 col-md-8 col-12 mt-lg-5 mb-lg-5 '>Vea el documento PDF que describe los detalles específicos de todos nuestros equipos disponibles.</p>
                        </div>


                        <div className='col-lg-12'>
                            <img src="imgEstudio/pedales.jpg" alt="La Puerta Estudios" />
                        </div>

                        <div className='imageStudioExperience col-lg-6  col-md-6 col-6' style={imgStudioExperience.img4}>
                            <a href="" className='botonSaberMas2'><DownloadEstudioPDF /></a>
                        </div>


                        <div className='mt-5 col-lg-12 col-md-12 col-12'>
                            <div className='d-flex'>
                                <div className='col-lg-6 col-md-11 col-12'>
                                    <h2 className='segundoh2'>Nuestro material</h2>
                                    <p className=' col-lg-6 col-md-8 col-12 mt-lg-5'>Dispón de un ambiente preparado con infinidad de herramientas para dar forma a tus producciones.</p>
                                    <p className=' col-lg-6 col-md-8 col-12 mt-lg-5 mb-lg-5 '>Vea el documento PDF que describe los detalles específicos de todos nuestros equipos disponibles.</p>
                                </div>
                            </div>

                            <div className='contactanosEstudio col-lg-3 col-md-6 col-12 '>
                                <div className='buttonSerHome d-flex  justify-content-between'>
                                    <DownloadEstudioPDF />
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </div>

                            {/* Boton movil */}
                            <div className='divbotonContactanos'>
                                <Link to="" className='boton'>Lista Completa</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Fin equipo disponible */}


            <Footer></Footer>
        </>
    )
}

export default StudioExperience