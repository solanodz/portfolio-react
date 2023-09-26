// import birdie from "../assets/"
import easyNotesSinFondo from "../assets/easy-notes-sinfondo.png"
import birdieSinFondo from "../assets/birdie-sinfondo.png"
import { HiArrowNarrowRight } from "react-icons/hi"
import Reveal from "./Reveal"

const Portfolio = () => {
    return (
        <div id="portfolio" className="font-poppins sm:my-20 sm:mx-10 sm:px-10 mt-20 h-fit">
            <div className="text-white flex flex-col md:flex-row sm:justify-between text-left my-8">
                <div className="sm:w-3/4">
                    <Reveal>
                        <h2 className="font-semibold text-3xl sm:text-6xl">Birdie Golfshop</h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-lg">E-commerce de productos para jugar al golf.</p>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-row items-center hover:text-accent duration-300 cursor-pointer">
                            <a href="#" className="">Ir al sitio</a>
                            <HiArrowNarrowRight className="mx-3 text-2xl" />
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-row items-center hover:text-accent duration-300 cursor-pointer">
                            <a href="https://github.com/solanodz/birdie-golfshop.git" className="">Ir al repositorio</a>
                            <HiArrowNarrowRight className="mx-3 text-2xl" />
                        </div>
                    </Reveal>

                </div>
                <Reveal>
                    <div className="hover:rotate-6 hover:origin-bottom-right duration-300 cursor-pointer" >
                        <a href="#">
                            <img src={birdieSinFondo} alt="Birdie Golfshop" className="w-fit" />
                        </a>
                    </div>
                </Reveal>
            </div>
            <div className="text-white flex flex-col md:flex-row sm:justify-between text-left my-12">
                <div className="sm:w-3/4">
                    <Reveal>
                        <h2 className="font-semibold text-3xl sm:text-6xl">Easy Notes App</h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-lg">Aplicación web para crear lista de tareas y notas con formulario de ingreso y creación de cuenta.</p>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-row items-center hover:text-accent duration-300 cursor-pointer">
                            <a href="https://sz-dev-to-do-app.vercel.app/" className="">Ir al sitio</a>
                            <HiArrowNarrowRight className="mx-3 text-2xl" />
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-row items-center hover:text-accent duration-300 cursor-pointer">
                            <a href="https://github.com/solanodz/to-do-app.git" className="">Ir al repositorio</a>
                            <HiArrowNarrowRight className="mx-3 text-2xl" />
                        </div>
                    </Reveal>
                </div>
                <Reveal>
                    <div className="hover:rotate-6 hover:origin-bottom-right duration-300 cursor-pointer" >
                        <a href="https://sz-dev-to-do-app.vercel.app/">
                            <img src={easyNotesSinFondo} alt="Easy Notes" className="w-fit border-3 " />
                        </a>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default Portfolio
