import { motion, useTransform, useScroll } from "framer-motion";
import { useRef,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import '/src/styles.scss'
import DownloadPDF from "../descargar/DownloadPDF";
import DownloadEstudioPDF from "../descargar/DownloadEstudioPDF";

const imgStudioExperience = {

  img1: {
    backgroundImage: 'url(/imgEstudio/salaElvira.jpg)',
  }
}

const SmoothScroll = () => {
  return (
    <div className="bg-white">
      <div className="container-fluid">
        <div className="row containerNuestroEspacio">
          <div className='d-flex justify-content-between mb-xl-2 mb-xs-0  col-lg-12 col-md-12 col-12'>
            <h2>Nuestro espacio</h2>
            <img className='imgNota' src="imgEstudio/nota3.svg" alt="La Puerta Estudios" />
          </div>

          <div className='mt-3 col-lg-12 col-md-12 col-12'>
            <div className='d-flex'>
              <div className='col-lg-8 col-md-12 col-12'>
                <p className=' col-lg-6 col-md-8 col-6'>Clica el botón de abajo para ver las especificaciones técnicas de las salas.</p>
              </div>
            </div>
          </div>

          {/* Lista MOBILE */}
          <div className='ListaCompletaMobile' style={imgStudioExperience.img1}>
            <a href="" className='botonListaCompletaMobile'><DownloadEstudioPDF /></a>
          </div>

          <div className='ListadoEstudio'>
            <div className='d-flex justify-content-between  mb-4  col-lg-12 col-md-12 col-12'>
              <h2>Servicios</h2>
              <img className='imgNota' src="imgEstudio/nota2.svg" alt="La Puerta Estudios" />
            </div>
            <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
              <p className='font-normal'>Composición y producción</p>
            </div>
            <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
              <p className='font-normal'>Grabación</p>
            </div>
            <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
              <p className='font-normal'>Mezcla & Mix</p>
            </div>
            <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
              <p className='font-normal'>Composición y producción</p>
            </div>
            <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
              <p className='font-normal'>Post Produccion</p>
            </div>
            <div className='flex justify-between pb-1 mb-2 border-2 border-b-black border-t-white border-r-white border-l-white'>
              <p className='font-normal'>Rodajes; partituras</p>
            </div>
          </div>

          <div className='contactanosEstudioSmooth col-lg-3 col-md-6 col-12 '>
            <Link>
              <div className='buttonSerHome d-flex  justify-content-between'>
                <DownloadPDF />
                <i className="bi bi-arrow-right"></i>
              </div>
            </Link>
          </div>

        </div>
      </div>

      <HorizontalScrollCarousel />

    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


    const [xRange, setXRange] = useState(["4%", "-38%"]);

    useEffect(() => {
      const handleResize = () => {
        if (window.matchMedia("(min-width: 768px) and (max-width: 1964px)").matches) {
          // RESOLUCIÓN MAC
          setXRange(["4%", "-30%"]);
        } else {
          // Pantallas grandes (más de 1964px)
          setXRange(["4%", "-10%"]);
        }
      };
  
      // LLAMADA
      handleResize();
  
      
      window.addEventListener("resize", handleResize);
  
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <section ref={targetRef} className="relative h-[200vh] ocultarScroll">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <>
      <div className="global">
        <div
          key={card.id}
          className="smoothSize group relative overflow-hidden bg-neutral-200"
        >
          <div
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div className="absolute inset-0 z-10 grid place-content-center">

          </div>
        </div>

        <div className="blockText mt-5 w-2/3">
          <h2>{card.title}</h2>
          <p className="mt-2">{card.description}</p>
        </div>
      </div>
    </>

  );
};

export default SmoothScroll;

const cards = [
  {
    url: "/imgEstudio/salaElvira.jpg",
    title: "Sala Elvira",
    description: "Tratada acústicamente para una sonoridad natural y brillante.",
    id: 1,
  },
  {
    url: "/imgEstudio/salaMonaita.jpg",
    title: "Sala Monaita",
    description: "Configurada para un ambiente más íntimo y seco.",
    id: 2,
  },
  {
    url: "/imgEstudio/control.jpeg",
    title: "Control",
    description: "El corazón del estudio, interconectado por distintos protocolos con las demás salas.",
    id: 3,
  },
  {
    url: "/LaPuertaHome.jpg",
    title: "Cocina",
    description: "Totalmente equipada y a tu disposición. ",
    id: 4,
  },

];









