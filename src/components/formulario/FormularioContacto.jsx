import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Establecer el elemento principal para accesibilidad

function FormularioContacto() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onSubmit = (data) => {
        // Mostrar el modal y resetear el formulario instantáneamente
        setModalIsOpen(true);
        reset();

        // Enviar la solicitud fetch de manera asíncrona
        fetch("https://formsubmit.co/ajax/administracion@grupoduende.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error('Error al enviar el formulario', error);
            });
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className='container-fluid formulario'>
                <div className='row sectionOne'>

                    <form className='w-full lg:w-1/2' onSubmit={handleSubmit(onSubmit)}>

                        <div className='divNombreEmail'>
                            <div className='w-full lg:w-2/5 d-flex flex-col'>
                                <label className='font-extrabold font-medium'>Nombre Completo</label>
                                <input type="text" {...register('nombre', {
                                    required: true,
                                })} />
                                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                            </div>

                            <div className='w-full lg:w-2/5 d-flex flex-col'>
                                <label className='font-extrabold font-medium'>Email</label>
                                <input type="text" {...register('email', {
                                    required: true,
                                    // pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                })} />
                                {/* {errors.email?.type === 'pattern' && <p>El formato de email es incorrecto</p>} */}
                            </div>

                        </div>

                        <div className='w-full lg:w-2/5 mt-5 d-flex flex-col'>
                            <label className='font-extrabold font-medium'>Empresa</label>
                            <input type="text" {...register('empresa')} />
                        </div>

                        <div className='w-full mt-5 d-flex flex-col'>
                            <h4 className='font-extrabold font-medium'>Elegir una opción</h4>
                            <label className='mt-3 check'>
                                <input {...register('servicios')} type="radio" id="estudio" value="Estudio" className="custom-checkbox" />Estudio
                            </label>

                            <label className='mt-3 check'>
                                <input {...register('servicios')} type="radio" id="boutique" value="La Puerta Boutique" className="custom-checkbox" />La Puerta Boutique
                            </label>

                        </div>
                        <div className='mt-5'>
                            <h4 className='font-extrabold font-medium'>Escribe tu mensaje</h4>
                            <textarea {...register('mensaje', { required: true })} className='w-full' name="mensaje" rows="4" cols="50"></textarea>
                        </div>

                        <input className='botonForm mt-5' type="submit" value="Enviar tu mensaje" />
                    </form>

                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Mensaje de éxito"
            >
                <h2>Formulario enviado con éxito</h2>
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </>
    );
}

export default FormularioContacto;
