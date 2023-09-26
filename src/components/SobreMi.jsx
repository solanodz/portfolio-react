import dibujo from "../assets/Hand coding-amico.svg"
import Reveal from "./Reveal"
import desarrolloWeb from '/'
import ingles from '/EF SET Certificate.pdf'
import javascript from '/javascript.png'
import react from '/react.png'
import frontEnd from '/front-end-certificado.png'

const SobreMi = () => {
    return (
        <div>
            <div id="sobreMi" className=' text-white  h-fit text-sm text-left px-2 py-12 sm:px-20 sm:text-xl sm:m-20 leading-relaxed rounded-2xl'>
                <Reveal>
                    <h1 className="text-accent font-poppins font-semibold text-left pb-3 text-4xl sm:text-6xl">Sobre Mí</h1>
                </Reveal>
                <Reveal>
                    <p>Mi nombre es Solano de Zuasnabar, soy de Tucumán-Argentina. Soy Front-end developer y proximamente Full-stack developer. </p>
                    <p>Soy profesor de educacion fisica desde agosto del 2022 pero mientras finalizaba mi carrera descubri que tambien me apasionaba la programación. Después de recibirme decidí dedicarle más tiempo a esto realizando el curso de Full-stack developer en Coderhouse el cual termino en febrero del año 2024.</p>
                    <p>Descargar Certificados:</p>
                </Reveal>
                <div className="flex flex-col justify-around mt-12 sm:flex-row">
                    <Reveal>
                        <div className='flex flex-col items-start my-4  md:1/2'>
                            <a href={ingles} download={ingles} target="_blank" className='bg-accent text-white text-center border-2 border-accent py-2 px-7 text-sm font-medium my-1 rounded-md sm:py-3 w-full hover:bg-black hover:text-accent duration-200' rel="noreferrer">Nivel de Inglés - EFSET</a>
                            <a href={desarrolloWeb} download={desarrolloWeb} target="_blank" className='bg-accent text-white text-center border-2 border-accent py-2 px-7 text-sm font-medium my-1 rounded-md sm:py-3 w-full hover:bg-black hover:text-accent duration-200' rel="noreferrer">Desarrollo Web - Coderhouse</a>
                            <a href={javascript} target="_blank" download={javascript} className='bg-accent text-white text-center border-2 border-accent py-2 px-7 text-sm font-medium my-1 rounded-md sm:py-3 w-full hover:bg-black hover:text-accent duration-200' rel="noreferrer">JavaScript - Coderhouse</a>
                            <a href={react} target="_blank" download={react} className='bg-accent text-white text-center border-2 border-accent py-2 px-7 text-sm font-medium my-1 rounded-md sm:py-3 w-full hover:bg-black hover:text-accent duration-200' rel="noreferrer">React - Coderhouse</a>
                            <a href={frontEnd} download={frontEnd} target="_blank" className='bg-accent text-white text-center border-2 border-accent py-2 px-7 text-sm font-medium my-1 rounded-md sm:py-3 w-full hover:bg-black hover:text-accent duration-200' rel="noreferrer">Desarrollador Front-end - Coderhouse</a>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div>
                            <img src={dibujo} alt="" className="h-80 m-auto" />
                        </div>
                    </Reveal>
                </div>
            </div>
        </div >
    )
}

export default SobreMi
