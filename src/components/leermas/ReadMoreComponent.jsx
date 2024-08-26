import React, { useState, useRef } from 'react';

const ReadMoreComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dotsRef = useRef(null);
  const moreTextRef = useRef(null);
  const btnTextRef = useRef(null);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='col-lg-8 col-md-11 col-12'>
      <p className='col-lg-10 col-md-8 col-12'>
        Ulises disfrutaba de un modesto espacio, en los bajos de su casa, para hacer su música sin molestar y pasar el rato. Muy pronto quiso acondicionarlo mejor y ahí fue cuando apareció Roca en una comida con amigos comunes. Se cayeron bien. Ulises pensó que el nuevo colega, un joven y ya experimentado técnico de sonido, podría asesorarle. Quedaron en verse pero pasaron algunas semanas en las que Roca no contestó a los mensajes de Ulises. 
        <span ref={dotsRef} style={{ display: isExpanded ? 'none' : 'inline' }}>...</span>
        <span ref={moreTextRef} style={{ display: isExpanded ? 'inline' : 'none' }}>
        Hasta que un día se encontraron fortuitamente en el callejón del Zenete, muy cerca del local. Roca quedó impresionado por el encanto del espacio y sus posibilidades. Charlando sobre todo lo que se podría hacer allí, se dieron cuenta de que tenían ideas afines, que se entendían a la perfección. Roca llevaba tiempo pensando en montar un estudio de grabación, algo quemado ya de dedicarse solo a sonorizar conciertos en directo pero sin un proyecto propio. Y precisamente ese día del encuentro en el Zenete, se había despertado con la decisión firme de montar su propio estudio. “Voy en busca de mi estudio”, se dijo Roca al salir de su casa aquella mañana. Y entonces, como si el destino jugara sus cartas, se encontró con Ulises. A las nueve de la mañana del día siguiente se pusieron manos a la obra y empezaron a reformar el local. El proyecto original era modesto pero poco a poco fue creciendo en sus cabezas y materializándose en sus propias manos. Tras tres años de mucho trabajo y sacrificio abrieron al público La Puerta, un bello sueño compartido por un músico y un técnico de sonido que ahora son hermanos.
        </span>
      </p>
      <button className='leermas' ref={btnTextRef} onClick={toggleReadMore}>
        {isExpanded ? 'Ocultar texto' : 'Leer más'}
      </button>
    </div>
  );
};

export default ReadMoreComponent;

