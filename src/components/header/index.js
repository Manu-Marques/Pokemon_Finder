import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo 2.png";

export default function Header() {
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

<nav class="p-3 border-gray-200  bg-gray-50 dark:bg-red-700 dark:border-gray-700">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <NavLink to="/" class="flex items-center">
      <img src={logo} alt="logo" class='max-w-xs h-auto'  />
    </NavLink>
    <button onClick={toggleMenu} data-collapse-toggle="navbar-hamburger" type="button" class="transition-all duration-500 inline-flex items-center p-3 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none  border-2 dark:border-gray-900 dark:text-gray-50 dark:hover:bg-yellow-400 " aria-controls="navbar-hamburger" aria-expanded="false">
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex-col mt-4 rounded-lg bg-gray-50 dark:bg-bluekemon dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:current-link" aria-current="page">Accueil</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-white">Liste de Pokemons</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-zinc-900 dark:hover:text-white">Pokemon au hasard</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-900 dark:hover:text-white">Jeux videos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
    }