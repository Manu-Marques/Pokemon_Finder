import { useState } from "react";
import { useEffect } from "react";

export default function Header() {

        const [open, setOpen] = useState(false);

        const toggleMenu = () => {
            setOpen(!open);
            console.log('tu clique');
        };

        useEffect(() => {
            if (open) {
               document.getElementsByClassName('open-menu').click()
            }
        }, [open]);
           



    return (
       
<nav class="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button onClick={toggleMenu} data-collapse-toggle="navbar-hamburger" type="button" class="open-button inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
    }