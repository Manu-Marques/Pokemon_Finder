import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo 2.png";

export default function Header({ pokemon }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const menu = document.getElementById('navbar-hamburger');
    if (open) {
      document.getElementById('navbar-hamburger').click(menu.classList.remove('hidden'));
    }
    else {
      document.getElementById('navbar-hamburger').click(menu.classList.add('hidden'));
    }
  }, [open])

  return (
    <nav className="rounded-b-lg p-3 border-gray-200 bg-gray-50 dark:bg-red-700 dark:border-gray-700 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link onClick={() => setOpen(false)} to="/" className="flex items-center">
          <img src={logo} alt="logo" className='pb-3 min-[340px]:max-w-xs h-auto' />
        </Link>
        <button onClick={toggleMenu} data-collapse-toggle="navbar-hamburger" type="button" className="transition-all duration-500 inline-flex items-center p-3 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none  border-2 dark:border-gray-900 dark:text-gray-50 dark:hover:bg-yellow-400" aria-controls="navbar-hamburger" aria-expanded="false">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="pt-1 pb-1 hidden w-full" id="navbar-hamburger">
          <ul className="flex-col rounded-lg bg-gray-50 dark:bg-bluekemon dark:border-gray-700">
            <li>
              <Link onClick={() => setOpen(false)} to="liste-pokemons" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-white">Liste de Pokemons</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="pokemon-hasard" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-zinc-900 dark:hover:text-white">Pokemon au hasard</Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} to="jeux-videos" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-white">Jeux videos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
}