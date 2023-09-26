import fotoHero from '../assets/fotoCV-cuadrada.jpg'
import { FaCss3Alt, FaHtml5, FaReact, FaBootstrap, FaSass, FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiTailwindcss } from "react-icons/si"
import { Link } from 'react-scroll'
import Reveal from './Reveal'

const Hero = () => {
    return (
        <div id='inicio' className='flex flex-col justify-start sm:mt-40 items-center bg-black mb-48 text-white'>
            <div className='flex sm:flex-row items-start sm:pl-9 flex-col'>
                <Reveal>
                    <img src={fotoHero} alt="foto perfil" className='h-56 sm:h-80 rounded-full my-6 sm:mr-12' />
                </Reveal>
                <div className='flex flex-col'>
                    <div className='flex flex-col justify-between'>
                        <Reveal>
                            <h1 className='ml-4 font-raleway text-5xl text-left font-extrabold sm:text-5xl md:text-7xl'>Hola! Soy Solano</h1>
                        </Reveal>
                        <Reveal>
                            <h2 className='ml-4 mt-4 font-raleway text-accent text-3xl text-left font-bold sm:mt-12 sm:text-3xl'>Front-end Developer</h2>
                        </Reveal>
                        <Reveal>
                            <div className='flex flex-row flex-wrap'>
                                <FaHtml5 className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                                <FaCss3Alt className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                                <IoLogoJavascript className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                                <FaReact className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                                <SiTailwindcss className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                                <FaBootstrap className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                                <FaSass className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                                <FaGithub className='px-1 text-accent text-5xl sm:text-6xl mt-2 rounded-full p-3' />
                            </div>
                        </Reveal>
                    </div>
                    <Reveal>
                        <div className='flex justify-start items-center w-full pl-2 sm:mt-12'>
                            <Link to="contactame" smooth={true} duration={500} className='bg-secondary border-2 border-secondary py-2 px-7 font-medium m-2 rounded-md sm:py-3 sm:w-fit hover:bg-accent hover:border-accent duration-200'>Contactame</Link>
                            <Link to="portfolio" smooth={true} duration={500} className='bg-accent border-2 border-accent py-2 px-7 font-medium m-2 rounded-md sm:py-3 sm:w-fit hover:bg-black hover:text-accent duration-200'>Portfolio</Link>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className='flex flex-col my-1'>
            </div>
        </div>

    )
}

export default Hero
