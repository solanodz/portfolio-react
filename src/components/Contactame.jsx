import { FaPaperPlane, FaPhoneAlt, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"


const Contactame = () => {
    return (
        <div className="text-white flex flex-col md:flex-row sm:justify-between text-left my-12 sm:mx-24">
            <div className="flex flex-col text-left sm:w-1/2">
                <h1 className="text-white font-poppins font-semibold text-left p-2 rounded-md text-4xl sm:text-5xl mb-6">¡Contactame!</h1>
                {/* Poner CV descargable y link a email */}
                <p className="flex flex-row items-center"><FaPaperPlane className="text-primary m-3" />sdezuasnabar@gmail.com</p>
                <p className="flex flex-row items-center"><FaPhoneAlt className="text-primary m-3" /> +54 381 664 0456</p>
                <div className="flex flex-row m-3">
                    {/* Ver como linkear estos iconos */}
                    <FaInstagram className="text-4xl hover:text-primary duration-300 cursor-pointer mr-4" />
                    <FaGithub className="text-4xl hover:text-primary duration-300 cursor-pointer mr-4" />
                    <FaLinkedin className="text-4xl hover:text-primary duration-300 cursor-pointer mr-4" />
                </div>
                <button className="text-left m-3 mt-6 bg-accent w-fit px-6 py-3 rounded-lg border-2 border-accent hover:bg-black hover:text-accent duration-200">Descargar CV</button>
            </div>
            {/* Hacer que la info del usuario se guarde en una google sheets */}
            <form className="flex flex-col sm:w-1/2">
                <input type="text" className="my-2 w- p-2 pl-4 bg-secondary rounded-lg" placeholder="Nombre y apellido" />
                <input type="email" className="my-2 p-2 pl-4 bg-secondary rounded-lg" placeholder="Email" />
                <textarea name="menasaje" id="" cols="30" rows="10" className="my-2 p-2 pl-4 bg-secondary rounded-lg" placeholder="Mensaje"></textarea>
                <button className="bg-secondary border-2 border-secondary py-2 px-7 font-medium my-2 rounded-md sm:py-3 hover:bg-accent hover:border-accent duration-200 w-fit">Enviar</button>
            </form>
        </div>
    )
}

export default Contactame
