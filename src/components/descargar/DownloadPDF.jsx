import '/src/styles.scss'

const DownloadPDF = () => {
  return (
    <a href="/PDFs/Info_Acustico.pdf" download className='descargarPDF'>
      Ver especificaciones
    </a>
  );
};

export default DownloadPDF;