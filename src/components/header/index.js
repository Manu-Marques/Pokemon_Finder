import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo 2.png";

export default function Header({ pokemon }) {
  const [open, setOpen] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [filterResults, setFilterResults] = useState([]);

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

  const searchPokemonName = (searchValue) => {
    setSearchPokemon(searchValue)
    if (searchPokemon !== '') {
      const filterData = pokemon.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchPokemon.toLowerCase())
      })
      setFilterResults(filterData)
    }
    else {
      setFilterResults(pokemon)
    }
  };

  return (
    <nav className="p-3 border-gray-200  bg-gray-50 dark:bg-red-700 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link onClick={() => setOpen(false)} to="/" className="flex items-center">
          <img src={logo} alt="logo" className='pb-3 max-w-xs h-auto' />
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
      {/* start search */}
      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Recherche</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="text" onChange={(e) => searchPokemonName(e.target.value)} id="search" className=" w-full p-4 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pikachu, Pokemon version Platine ..." required />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Recherche</button>
        </div>
      </form>
      {/* end search */}
    </nav>


  );
}