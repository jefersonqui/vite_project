import { NavLink } from "react-router-dom";


const NavBar = () => {
    // const btnLink = 'mr-5 hover:text-red';
    const btnLink = 'block inline-block py-1 text-white hover:text-yellow-400 cursor:pointer mr-4';
    const activeLink = 'block inline-block1 py-1 text-yellow-400 mr-4';
    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/" className={({isActive}) => isActive ? activeLink :btnLink}>Inicio</NavLink>
                        <NavLink to="/cursos" className={({isActive}) => isActive ? activeLink :btnLink}>Cursos</NavLink>
                        <NavLink to="/imagenes" className={({isActive}) => isActive ? activeLink :btnLink}>Imagenes</NavLink>

                    </nav>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <NavLink to="/login" className={({isActive}) => isActive ? activeLink :btnLink}>Login</NavLink>
                        <NavLink to="/registro" className={({isActive}) => isActive ? activeLink :btnLink}>Registro</NavLink>


                    </nav>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}
export default NavBar;