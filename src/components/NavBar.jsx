

const NavBar = () => {
    return (
        <div className='bg-black-70 backdrop-blur-xl backdrop-brightness-50 fixed top-0 left-0 w-full flex flex-col md:flex-row items-center justify-between border-b-black border-b-2 py-5 px-10'>
            <h1 className='bg-primary px-6 text-lg font-poppins font-semibold rounded-full'>sz.dev</h1>
            <ul className='text-white flex flex-col sm:flex-row items-center'>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-primary duration-300 cursor-pointer'><a>Inicio</a></li>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-primary duration-300 cursor-pointer'><a>Sobre Mí</a></li>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-primary duration-300 cursor-pointer'><a>Portfolio</a></li>
                <li className='py-3 sm:px-3 mx-2 md:py-1 hover:text-primary duration-300 cursor-pointer'><a>Contactame</a></li>
            </ul>
        </div>
    )
}



export default NavBar
