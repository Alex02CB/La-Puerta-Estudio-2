import { motion, useTransform, useScroll } from "framer-motion";
import { useRef,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import '/src/styles.scss'



const SmoothScrollBoutique = () => {
  return (
    <div className="bg-white">


      {/* SEGUNDA PARTE */}
      

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xRange, setXRange] = useState(["4%", "-48%"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px) and (max-width: 1964px)").matches) {
        // RESOLUCIÓN MAC
        setXRange(["1%", "-65%"]);
      } else if(window.matchMedia("(max-width:768px)").matches) {
        setXRange(["2%", "-70%"]);
      } else {
        // Pantallas grandes (más de 1964px)
        setXRange(["1%", "-45%"]);
      }
    };

    // LLAMADA
    handleResize();

    
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <section ref={targetRef} className="relative h-[200vh] ocultarScrollBoutique">
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
    <div className="global2">
        <div
        key={card.id}
        className="group relative xl:h-[644px] xl:w-[1450px] lg:h-[450px] lg:w-[450px] h-[500px] w-[300px] overflow-hidden bg-neutral-200"
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

export default SmoothScrollBoutique;



const cards = [
  {
    url: "/imgBoutique/alojamiento.jpeg",
    title: "Alojamiento",
    description:"Apartamentos para todos los gustos en localizaciones clave del barrio y cercanos al estudio.",
    id: 1,
  },
  {
    url: "/imgBoutique/gastronomia.jpeg",
    title: "Gastronomía",
    description:"Disfruta de las mejores ofertas gastronómicas de la ciudad.",
    id: 2,
  },
  {
    url: "/imgBoutique/cultura.jpeg",
    title: "Cultura",
    description:"Empápate con la gran variedad de oferta cultural que ofrece Granada.",
    id: 3,
  },

];
