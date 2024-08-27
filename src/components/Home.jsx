import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles.scss'
import Footer from './Footer'
import Nav from './Nav'
import { useEffect } from 'react'

const imgHome = {

    img1: {
        backgroundImage: 'url(/exteriorLaPuerta.jpeg)',
    },
    img2: {
        backgroundImage: 'url(/lapuertaboutiqueHome.jpeg)',
    },
    img3: {
        backgroundImage: 'url(/FormacionesHome.jpeg)',
    },

};


function Home() {

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
                        <div className='bannerHome'>
                            <video autoPlay loop muted playsInline className="video-background">
                                <source src="/imgHome/HomeVideo.mp4" type="video/mp4" />
                                Tu navegador no soporta el video HTML5.
                            </video>
                            <video autoPlay loop muted playsInline className="video-mobile">
                                <source src="/imgHome/HomeVideoMobile.mp4" type="video/mp4" />
                                Tu navegador no soporta el video HTML5.
                            </video>
                        </div>
                    </div>
                </div>

            </motion.div>


            {/* Servicio1 */}
            <div className='container-fluid marginServicio ServicioEscritorio'>
                <div className='row sectionOneHome'>
                    <div className='w-full d-flex servicio '>
                        <div className='w-1/2' style={imgHome.img1}>
                        </div>
                        <div className='w-1/2 ml-7'>
                            <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                                <h2 className='w-5/6'>Estudio</h2>
                                <img className='h-4 lg:h-6 w-1/6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                            <p className='w-3/5'>Un edificio del siglo XIX en el  emblemático barrio del Albayzín. Totalmente reformado mantieniendo la escencia de la
                                arquitectura local.
                            </p>
                            <div className='mt-14 col-lg-6 col-md-6 col-12'>
                                <Link to='/studioexperience'>
                                    <div className='buttonSerHome d-flex  justify-content-between'>
                                        <p>Saber más</p>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </Link>

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
            {/* Servicio Mobile 1*/}
            <div className='container-fluid MobileServicio'>
                <div className="row sectionOneMobile">

                    <div className=' mt-5'>
                        <div className='d-flex justify-content-between mb-3 '>
                            <h2 className='w-5/6'>Estudio</h2>
                            <div>
                                <img className='h-4 lg:h-10 ' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                        </div>
                        <div className='imageSer' style={imgHome.img1} >
                            <Link to='/studioexperience'>
                                <a href="" className='botonSaberMas'>Saber más</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            {/* Servicio2 */}
            <div className='container-fluid'>
                <div className='row sectionOneHome ServicioEscritorio'>
                    <div className='w-full d-flex servicio'>
                        <div className='w-1/2' style={imgHome.img2}>
                        </div>
                        <div className='w-1/2 ml-7'>
                            <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                                <h2 className='w-5/6'>LA PUERTA Boutique</h2>
                                <img className='h-4 lg:h-6 w-1/6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                            <p className='w-3/5'>Sumérgete en la cultura y gastronomía andalusí. Desarrolla tus proyectos en un entorno histórico con un amplio abanico de ofertas culturales.
                            </p>
                            <div className='mt-14 col-lg-6 col-md-6 col-12'>
                                <Link to='/studioboutique'>
                                    <div className='buttonSerHome d-flex  justify-content-between'>
                                        <p>Saber más</p>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </Link>

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
            {/* Servicio Mobile 2*/}
            <div className='container-fluid MobileServicio'>
                <div className="row sectionOneMobile">

                    <div className='mt-5'>
                        <div className='d-flex justify-content-between mb-3 '>
                            <h2 className='w-5/6'>LA PUERTA Boutique</h2>
                            <div>
                                <img className='h-4 lg:h-10 ' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                        </div>
                        <div className='imageSer' style={imgHome.img2} >
                            <Link to='/studioboutique'>
                                <a href="" className='botonSaberMas'>Saber más</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            {/* Servicio3 */}
            <div className='container-fluid'>
                <div className='row sectionOneHome ServicioEscritorio'>
                    <div className='w-full d-flex servicio'>
                        <div className='w-1/2' style={imgHome.img3}>
                        </div>
                        <div className='w-1/2 ml-7'>
                            <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                                <h2 className='w-5/6'>Formaciones</h2>
                                <img className='h-4 lg:h-6 w-1/6' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                            <p className='w-3/5'>Apostamos por una formación completa, concreta, actualizada y de calidad, tanto online como presencial, impartida por profesionales del sector que se enfrentan día a día con la materia y técnicas que imparten.
                            </p>
                            <div className='mt-14 col-lg-6 col-md-6 col-12'>
                                <Link to='/masterclass'>
                                    <div className='buttonSerHome d-flex  justify-content-between'>
                                        <p>Saber más</p>
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </Link>

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
            {/* Servicio Mobile 3*/}
            <div className='container-fluid MobileServicio'>
                <div className="row sectionOneMobile">

                    <div className='mt-5'>
                        <div className='d-flex justify-content-between mb-3 '>
                            <h2 className='w-5/6'>Formaciones</h2>
                            <div>
                                <img className='h-4 lg:h-10 ' src="/wavesSer.svg" alt="La Puerta Estudios" />
                            </div>
                        </div>
                        <div className='imageSer' style={imgHome.img3} >
                            <Link to='/masterclass'>
                                <a href="" className='botonSaberMas'>Saber más</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            {/* POEMA */}

            <div className='backgroundPoema'>
                <div className='container boxHomeContact'>
                    <div className='row d-flex '>
                        <div className='contactDiv col-lg-12 col-sm-10 col-10 '>
                            <div className='col-lg-12  col-sm-12 col-10'>
                                <h2 className='mb-4'>“Deja la puerta entorná por si alguna vez te diera la tentación de entrar”</h2>
                                <p className='col-lg-8 textoHomeContact'><span>La Puerta Entorná </span><br /> Joaquín López</p>
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
                        <h2 className='mb-4'>“Deja la puerta entorná por si alguna vez te diera la tentación de entrar”</h2>
                        <p className='textoHomeContact'><span>La Puerta Entorná </span><br /> Joaquín López</p>
                        <Link to="/contactus" className='boton'>Contáctanos</Link>
                    </div>
                </div>
            </div>

            {/* FIN POEMA */}
            <Footer></Footer>
        </>
    )
}

export default Home
