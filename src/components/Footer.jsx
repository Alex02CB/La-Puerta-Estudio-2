import { Link } from 'react-router-dom'
import RelojAnalogico from './reloj/reloj'

function Footer() {
    return (
        <>
            <footer>
                <div className="footerDesktop container-fluid">
                    <div className="row">

                        <div className="col-4 col-sm-2 col-lg-2  ">
                            <img src="/LogoFooter.png" alt="La Puerta Estudios" className='logoFooter' />
                        </div>

                        <div className='col-lg-2 col-4 col-sm-2'>
                            <h2 className="tituloFooter">Menú</h2>
                            <ul>
                                <li><Link to="/">Home</Link> </li>
                                <li><Link to="/studioexperience">Studio Experience</Link></li>
                                <li><Link to="/studioboutique">Studio Boutique</Link></li>
                                <li><Link to="/masterclass">Master Class</Link></li>
                                <li><Link to="/aboutus">Sobre Nosotros</Link></li>
                                <li><Link to="/contactus">Contacto</Link></li>
                            </ul>
                        </div>

                        <div className='col-lg-2 col-4 col-sm-2'>
                            <h2 className="tituloFooter">Redes Sociales</h2>
                            <ul>
                                <li><Link to='https://www.instagram.com/lapuertaestudios/'>Instagram</Link></li>
                                <li><Link to='https://linktr.ee/LAPUERTASTUDIOS'>Linktr</Link></li>
                            </ul>
                        </div>



                        <div className='boxWaves col-lg-2 col-sm-2 offset-md-4 d-flex justify-content-end align-items-start'>
                            <img src="/wavesFooter.svg" alt="La Puerta Estudios" className='logoWaves' />
                        </div>
                    </div>
                </div>

                <div className='footerDesktop container-fluid'>
                    <div className='row endFooter'>
                        <div className='col-lg-6 col-sm-4 p-0 d-flex align-items-end'>

                            <p>Diseño: Pal.Desing</p>

                            <p>Desarrollado: J.Alejandro Campillo</p>

                            <a href="">Todos los derechos reservados.</a>

                            <a href="">Terminos y condiciones</a>


                        </div>

                        <div className='col-lg-6 d-flex align-items-end justify-content-end'>
                            <RelojAnalogico />
                        </div>

                    </div>
                </div>

                <div className='footerMobile container '>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-12 d-flex flex-column align-items-center">
                            <img src="/LogoFooter.png" alt="La Puerta Estudios" className='logoFooter' />
                            <a href="https://maps.app.goo.gl/VXEPdjXfRJC5thwu8">Cuesta Alhacaba 11. 18010, Granada. España</a>
                            <p>Redes</p>
                            <a href="https://www.instagram.com/lapuertaestudios/">@lapuertaestudios</a>
                            <a href="https://linktr.ee/LAPUERTASTUDIOS">linktr.ee/LAPUERTASTUDIOS</a>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer