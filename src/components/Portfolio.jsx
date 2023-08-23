// import birdie from "../assets/"
import birdie from "../assets/birdie-confondo.png"
import todoSinFondo from "../assets/todo-sinfondo.png"
import birdieSinFondo from "../assets/birdie-sinfondo.png"
import birdieSinFondo13 from "../assets/birdie-sinfondo-1-3.png"
import { HiArrowNarrowRight } from "react-icons/hi"

const Portfolio = () => {
    return (
        <div id="portfolio" className="font-poppins sm:my-20 sm:mx-10 sm:px-10 mt-20 h-fit">
            <div className="text-white flex flex-col md:flex-row sm:justify-between text-left my-8">
                <div className="sm:w-3/4">
                    <h2 className="font-semibold text-3xl sm:text-6xl">Birdie Golfshop</h2>
                    <p className="text-lg">E-commerce de productos para jugar al golf.</p>
                    <div className="flex flex-row items-center hover:text-primary duration-300 cursor-pointer">
                        <a href="#" className="">Ir al sitio</a>
                        <HiArrowNarrowRight className="mx-3 text-2xl" />
                    </div>
                </div>
                <div className="hover:rotate-6 hover:origin-bottom-right duration-300 cursor-pointer" >
                    <a href="#">
                        <img src={birdieSinFondo} alt="Birdie Golfshop" className="w-fit" />
                    </a>
                </div>
            </div>
            <div className="text-white flex flex-col md:flex-row sm:justify-between text-left my-12">
                <div className="sm:w-3/4">
                    <h2 className="font-semibold text-3xl sm:text-6xl">To-do App</h2>
                    <p className="text-lg">Web app para ingresar tareas a realizar, marcar como completadas o eliminar.</p>
                    <div className="flex flex-row items-center hover:text-primary duration-300 cursor-pointer">
                        <a href="https://sz-dev-to-do-app.vercel.app/" className="">Ir al sitio</a>
                        <HiArrowNarrowRight className="mx-3 text-2xl" />
                    </div>
                </div>
                <div className="hover:rotate-6 hover:origin-bottom-right duration-300 cursor-pointer" >
                    <a href="https://sz-dev-to-do-app.vercel.app/">
                        <img src={todoSinFondo} alt="Birdie Golfshop" className="w-fit" />
                    </a>
                </div>

            </div>

            {/* <div className="text-white flex flex-col md:flex-row sm:justify-between text-left my-8">
                <div className="sm:w-3/4">
                    <h2 className="font-semibold text-3xl sm:text-6xl">sz.dev Blog</h2>
                    <p className="text-lg">Blog personal.</p>
                    <div className="flex flex-row items-center hover:text-primary duration-300 cursor-pointer">
                        <a href="#" className="">Ir al sitio</a>
                        <HiArrowNarrowRight className="mx-3 text-2xl" />
                    </div>
                </div>
                <div className="hover:rotate-6 hover:origin-bottom-right duration-300 cursor-pointer" >
                    <a href="#">
                        <img src={birdieSinFondo} alt="Birdie Golfshop" className="w-fit" />
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Portfolio
