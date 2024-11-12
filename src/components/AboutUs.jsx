import Nav2 from './Nav2'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReadMoreComponent from './leermas/ReadMoreComponent'
import { useEffect } from 'react'

const imgAboutus = {

    img1: {
        backgroundImage: 'url(/imgAboutus/localizacion.png)',
    },
    img2: {
        backgroundImage: 'url(/lapuertaboutiqueHome.jpeg)',
    },
    img3: {
        backgroundImage: 'url(/Formaciones.png)',
    },

};

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Nav2 />
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
                        <div className='bannerAboutUs'></div>
                    </div>
                </div>

            </motion.div>

            <div className='container-fluid '>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-xl-5 mb-xs-0  col-lg-12 col-md-12 col-12'>
                        <h2>Sobre Nosotros</h2>
                        <img className='waverSer' src="/LogoFooter.png" alt="La Puerta Estudios" />
                    </div>

                    <div className='point'>
                        <img src="/point.svg" />
                    </div>

                    <div className='mt-3 col-lg-12 col-md-12 col-12'>

                        <ReadMoreComponent />

                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-5  col-lg-12 col-md-12 col-12'>
                        <h2>Familia LA PUERTA</h2>
                        <img className=' imgNota ' src="/imgEstudio/nota3.svg" alt="La Puerta Estudios" />
                    </div>

                    <div className='flex flex-wrap gap-24 familia'>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/roca.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Carlos Roca</h3>
                            <p className='mb-3'>Productor ejecutivo y mánager.</p>
                            <a className='text-zinc-500	' href="https://www.instagram.com/aiquealegriaa/">@aiquealegria</a>
                        </div>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/ulises.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Ulises Ramos</h3>
                            <p className='mb-3'>Músico arreglista, compositor y productor musical.</p>
                            <a className='text-zinc-500	' href="https://instagram.com/ulises_r_m/">@ulises_r_m</a>
                        </div>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/jose.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Jose Manuel Peláez</h3>
                            <p className='mb-3'>Técnico de directo, de estudio y productor técnico.</p>
                            <a className='text-zinc-500	' href="https://www.instagram.com/josepelaez97/">@josepelaez97</a>
                        </div>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/marcos.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Marcos Muñiz</h3>
                            <p className='mb-3'>Técnico de mezcla y profesor.</p>
                            <a className='text-zinc-500	' href="https://www.instagram.com/mrcsmnz/">@mrcsmnz</a>
                        </div>

                        <div className='w-1/5'>
                            <img src="/imgAboutus/aroa.png" alt="La Puerta" />
                            <h3 className='font-bold mb-3 mt-3'>Aroa</h3>
                            <p className='mb-3'>Profesora de cante.</p>
                            <a className='text-zinc-500	' href="https://www.instagram.com/aroacarmona676/">@aroacarmona676</a>
                        </div>

                    </div>

                    <div className='familiaMobile'>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <p className='font-extrabold'>Carlos Roca</p>
                            <p>Manager y productor.</p>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <p className='font-extrabold'>Ulises Ramos</p>
                            <p>Músico arreglista y productor musical.</p>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <p className='font-extrabold'>Jose Manuel Pelaez</p>
                            <p>Jefe técnico.</p>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <p className='font-extrabold'>Marcos Muñiz</p>
                            <p>Técnico de mezcla y profesor.</p>
                        </div>
                        <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
                            <p className='font-extrabold'>Aroa</p>
                            <p>Profesora de cante.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid'>
                <div className='row sectionOne'>

                    <div className='d-flex justify-content-between mb-5  col-lg-12 col-md-12 col-12 '>
                        <h2>Localización</h2>
                        <img className=' imgNota ' src="/imgEstudio/nota.svg" alt="La Puerta Estudios" />
                    </div>

                    <div className='col-lg-12 plantillaImg lg:block hidden'>
                        <img src="/imgAboutus/localizacion.png" alt="La Puerta Estudios" />
                    </div>

                    <div className='flex justify-between lg:mt-14 '>
                        <p className=' lg:w-1/2 mb-4 font-normal'>El estudio se encuentra en la Cuesta Alhacaba 11, en la parte baja del Albayzín, más cercana al centro de la ciudad y de fácil acceso.</p>
                        <img className='w-4 hidden lg:block' src="point.svg" alt="LaPUERTA" />
                    </div>

                    {/* Mobile */}
                    <div className='plantillaMobileIMGboton' style={imgAboutus.img1}>
                        <a  className='plantillaMobileIMGenlace' target="_blank" href='https://www.google.com/maps/dir//Cta.+de+Alhacaba,+11,+Albaic%C3%ADn,+18010+Granada/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd71fcc16cbc1737:0x2b0e9f3e2e7111c8?sa=X&ved=1t:707&ictx=111'>Google Maps</a>
                    </div>


                    <div className='buttonMaps w-1/6 border-2 border-b-black border-t-white border-r-white border-l-white p-0  mt-5  d-flex  justify-content-between'>
                        <a className='textoGoogleMaps' target="_blank" href='https://www.google.com/maps/dir//Cta.+de+Alhacaba,+11,+Albaic%C3%ADn,+18010+Granada/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd71fcc16cbc1737:0x2b0e9f3e2e7111c8?sa=X&ved=1t:707&ictx=111'>Google Maps</a>
                        <i className="bi bi-arrow-right"></i>
                    </div>


                </div>
            </div>


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
                                <Link to='/contactus'>
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

            <Footer />

        </>

    )
}

export default AboutUs