import '/src/styles.scss'
import { motion, useScroll, useTransform, inView } from "framer-motion";


function App() {

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacity = inView(scrollYProgress, [0, 1], [0, 1]);



  return (
    <>
      <motion.div className="cardContainer" onViewportEnter={() => console.log('Eyy que pasa')} style={{ scale }}>
        {/* <motion.div style={{ opacity }} transition={{ duration: 0.5 }} viewport={{ amount: "all" }} className="cardStudio cardStudio1">
          <div className='container-fluid '>
            <div className='row plantilla'>

              <div className='col-lg-12 plantillaImg'>
                <img src="imgBoutique/alojamiento.jpeg" alt="La Puerta Estudios" />
              </div>

              <div className='mt-6'>

                <div className='d-flex justify-content-between mb-xl-5 mb-3  col-lg-12 col-md-12 col-12'>
                  <h2>Alojamiento</h2>
                  <img className='imgNota' src="imgEstudio/nota3.svg" alt="La Puerta Estudios" />
                </div>

                <div className='col-lg-6 col-md-11 col-12'>
                  <p className=' col-lg-10 col-md-8 col-12 '>Apartamentos para todos los gustos en localizaciones clave del barrio y cercanos al estudio.</p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 1 }} viewport={{ amount: "all" }} className="cardStudio cardStudio2">
          <div className='container-fluid '>
            <div className='row plantilla'>

              <div className='col-lg-12 plantillaImg'>
                <img src="imgBoutique/gastronomia.jpeg" alt="La Puerta Estudios" />
              </div>

              <div className='mt-6'>

                <div className='d-flex justify-content-between mb-xl-5 mb-3  col-lg-12 col-md-12 col-12'>
                  <h2>Gastronomía</h2>
                  <img className='imgNota' src="imgEstudio/nota.svg" alt="La Puerta Estudios" />
                </div>

                <div className='col-lg-6 col-md-11 col-12'>
                  <p className=' col-lg-10 col-md-8 col-12 '>Disfruta de las mejores ofertas gastronómicas de la ciudad.</p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 1 }} viewport={{ amount: "all" }} className="cardStudio cardStudio3">
          <div className='container-fluid '>
            <div className='row plantilla'>

              <div className='col-lg-12 plantillaImg'>
                <img src="imgBoutique/cultura.jpeg" alt="La Puerta Estudios" />
              </div>

              <div className='mt-6'>

                <div className='d-flex justify-content-between mb-xl-5 mb-3  col-lg-12 col-md-12 col-12'>
                  <h2>Cultura</h2>
                  <img className='imgNota' src="imgEstudio/nota2.svg" alt="La Puerta Estudios" />
                </div>

                <div className='col-lg-6 col-md-11 col-12'>
                  <p className=' col-lg-10 col-md-8 col-12 '>Empápate con la gran variedad de oferta cultural que ofrece Granada.</p>
                </div>

              </div>

            </div>
          </div>
        </motion.div> */}
        <motion.div className='cardStudio cardStudio4'>
          <div className=' h-[150px] lg:h-[500px] background-color: rgb(185 28 28); text-center flex items-center justify-center flex-col'>
            <p className='text-[40px] w-3/5'>“Dale limosna, mujer, que no hay en la vida nada como la pena de ser ciego en Granada”</p>
            <span className='lg:text-[32px] text-[16px] italic font-bold'>Francisco de Icaza</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}


export default App
