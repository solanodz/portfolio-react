/* eslint-disable react/jsx-no-target-blank */
import {
    FaPaperPlane,
    FaPhoneAlt,
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import Reveal from "./Reveal";

const Contactame = () => {
    return (
        <div
            id="contactame"
            className="text-white bg-black p-8 flex text-center flex-col sm:justify-between items-center my-24 sm:mx-24"
        >
            <Reveal>
                <h1 className="text-white font-poppins font-bold text-left p-2 rounded-md text-4xl sm:text-5xl mb-6">¡Contactame!</h1>
            </Reveal>
            <Reveal>
                <p className="flex text-lg flex-row items-center">
                    <FaPaperPlane className="text-accent m-3" />
                    sdezuasnabar@gmail.com
                </p>
            </Reveal>
            <Reveal>
                <p className="flex text-lg flex-row items-center">
                    <FaPhoneAlt className="text-accent m-3" /> +54 381 664 0456
                </p>
            </Reveal>
            <Reveal>
                <div className="flex flex-row mt-8 text-center items-center m-3">
                    <a href="https://instagram.com/solanodz" target="_blank">
                        <FaInstagram className="text-4xl hover:text-accent duration-300 cursor-pointer mr-4" />
                    </a>
                    <a href="https://github.com/solanodz" target="_blank">
                        <FaGithub className="text-4xl hover:text-accent duration-300 cursor-pointer mr-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/solanodz/" target="_blank">
                        <FaLinkedin className="text-4xl hover:text-accent duration-300 cursor-pointer mr" />
                    </a>
                </div>
            </Reveal>
            <Reveal>
                <div className="text-left m-3 mt-6 bg-accent w-fit px-6 py-3 rounded-lg border-2 border-accent hover:bg-black hover:text-accent duration-200">
                    <a
                        href="/public/downloads/cv-deZuasnabar-front-end.pdf"
                        target="_blank"
                    >
                        Descargar CV
                    </a>
                </div>
            </Reveal>
        </div>

    );
};

export default Contactame;
