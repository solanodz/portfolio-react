import dibujo from "../assets/Hand coding-amico.svg"

const SobreMi = () => {
    return (
        <div>
            <div className='bg-secondary text-white  h-fit text-sm text-left p-10 sm:px-20 sm:text-xl sm:m-20 leading-relaxed rounded-2xl'>
                <h1 className="text-white font-poppins font-semibold text-left pb-3 text-4xl sm:text-5xl">Sobre Mí</h1>
                <p>Mi nombre es Solano de Zuasnabar, soy de Tucumán-Argentina. Soy Front-end developer y proximamente Full-stack developer. </p>
                <p>Soy profesor de educacion fisica desde agosto del 2022 pero mientras finalizaba mi carrera descubri que tambien me apasionaba la programación. Después de recibirme decidí dedicarle más tiempo a esto realizando el curso de Full-stack developer en Coderhouse el cual termino en febrero del año 2024.</p>
                <p>Descargar Certificados:</p>
                <div className="flex flex-col justify-around mt-12 sm:flex-row">
                    <div className='flex flex-col items-start my-4 sm:w-1/3 md:1/2'>
                        <button className='bg-accent text-white border-2 border-accent py-2 px-7 text-sm font-medium my-2 rounded-md sm:py-3 w-full hover:bg-secondary hover:text-accent duration-200'>Nivel de Inglés - EFSET</button>
                        <button className='bg-accent text-white border-2 border-accent py-2 px-7 text-sm font-medium my-2 rounded-md sm:py-3 w-full hover:bg-secondary hover:text-accent duration-200'>Desarrollo Web - Coderhouse</button>
                        <button className='bg-accent text-white border-2 border-accent py-2 px-7 text-sm font-medium my-2 rounded-md sm:py-3 w-full hover:bg-secondary hover:text-accent duration-200'>JavaScript - Coderhouse</button>
                        <button className='bg-accent text-white border-2 border-accent py-2 px-7 text-sm font-medium my-2 rounded-md sm:py-3 w-full hover:bg-secondary hover:text-accent duration-200'>React - Coderhouse</button>
                    </div>
                    <div>
                        <img src={dibujo} alt="" className="h-80 m-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi
