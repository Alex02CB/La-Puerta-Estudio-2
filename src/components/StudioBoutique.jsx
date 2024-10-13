import Nav from './Nav'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import ScrollSticky from './scrollStudioBoutique/ScrollSticky.jsx'
import SmoothScrollBoutique from './smoothScroll/SmoothScrollBoutique.jsx'
import '../index.css'


function StudioBoutique() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav />
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
                        <div className='bannerStudioBoutique'>
                            <video autoPlay loop muted playsInline className="video-background">
                                <source src="/imgBoutique/VideoBoutique.mp4" type="video/mp4" />
                                Tu navegador no soporta el video HTML5.
                            </video>
                            <video autoPlay loop muted playsInline className="video-mobile">
                                <source src="/imgBoutique/VideoBoutique.mp4" type="video/mp4" />
                                Tu navegador no soporta el video HTML5.
                            </video>
                        </div>
                    </div>
                </div>

            </motion.div>

            <div className='container-fluid '>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>LA PUERTA Boutique</h2>
                        <img className='h-4 lg:h-6 w-1/6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                    </div>

                    <div className='point'>
                        <img src="/point.svg" />
                    </div>

                    <div className='mt-3 col-lg-12 col-md-12 col-12'>
                        <div className='d-flex'>
                            <div className='col-lg-6 col-md-11 col-12'>
                                <p className=' col-lg-10 col-md-8 col-12 '>Descansa en pleno corazón del Albayzín y conoce la vida del barrio y su gente. Disfruta de lo mejor de la comida local con las mejores vistas. Gestionamos tu estancia para que dispongas de total libertad y tiempo que dedicarle a tus producciones.</p>
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

                        {/* Boton movil */}
                        <div className='divbotonContactanos'>
                            <Link to="/contactus" className='boton'>Contáctanos</Link>
                        </div>

                    </div>
                </div>
            </div>

            <SmoothScrollBoutique/>

            <ScrollSticky />

            <div className='backgroundPoema'>
                <div className='container boxHomeContact'>
                    <div className='row d-flex '>
                        <div className='contactDiv col-lg-12 col-sm-10 col-10 '>
                            <div className='col-lg-12  col-sm-12 col-10'>
                                <h2 className='mb-4'>Reserva tu experiencia LA PUERTA Boutique </h2>
                                <p className='col-lg-8 textoHomeContact'><span>Haz tu reserva</span><br /></p>
                            </div>
                            <div className='mt-5 col-lg-3 col-sm-4 col-12 '>
                                <Link to='/book'>
                                    <div className='buttonSerHome d-flex  justify-content-between'>
                                        <p>Reserva</p>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="poemamobile">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2 className='mb-4'>Reserva tu experiencia LA PUERTA Boutique</h2>
                        <p className='textoHomeContact'><span>Haz tu reserva</span><br /></p>
                        <Link to="/contactus" className='boton'>Contáctanos</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default StudioBoutique