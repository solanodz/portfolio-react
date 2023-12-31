import { Link } from "react-scroll"
import szLogo from "../assets/logos/sz-fondo-blanco.png"
const NavBar = () => {
    return (
        <div className='z-10 hidden bg-black-70 backdrop-blur-xl backdrop-brightness-50 fixed top-0 left-0 w-full sm:flex flex-col md:flex-row items-center justify-between border-b-black border-b-2 py-2 px-10'>
            <img src={szLogo} alt="logo sz.dev" className="w-14 m-0 pt-2" />
            {/* <h1 className="bg-accent text-xl mt-2 text-black font-raleway font-bold py-1 px-6 rounded-full">sz.dev</h1> */}
            <ul className='text-white flex flex-col sm:flex-row items-center'>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-accent duration-300 cursor-pointer'>
                    <Link
                        to="inicio"
                        smooth={true}
                        duration={500}
                    >
                        Inicio
                    </Link>
                </li>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-accent duration-300 cursor-pointer'>
                    <Link
                        to="sobreMi"
                        smooth={true}
                        duration={500}
                    >
                        Sobre Mí
                    </Link>
                </li>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-accent duration-300 cursor-pointer'>
                    <Link
                        to="portfolio"
                        smooth={true}
                        duration={500}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-accent duration-300 cursor-pointer'>
                    <Link
                        to="contactame"
                        smooth={true}
                        duration={500}
                    >
                        Contactame
                    </Link>
                </li>
            </ul>
        </div>

    )
}

export default NavBar
