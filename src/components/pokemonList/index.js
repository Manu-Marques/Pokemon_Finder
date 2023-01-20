import { Link } from "react-router-dom";
import { useState } from "react";

export default function PokemonList({ pokemon }) {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue("pokemon");
  };

  function fusionFonction(e) {
    searchPokemonName(e.target.value);
    handleUserInput(e);
  };


  return  (
    <div>
     {/* Start Search Bar */}
      <form className="pt-2 pt-2 flex justify-center ">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input value={inputValue} onChange={fusionFonction} id="search" className="placeholder:text-lg min-[320px]:w-80 md:w-search p-4 pl-10 text-xl text-gray-900 border border-4 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-70 dark:border-red-700 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pikachu, Dracaufeu..." required />
          <button onClick={resetInputField} className="text-white absolute right-2.5 bottom-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Effacer</button>
        </div>
      </form>
      {/* End Search Bar */}
      {/* Start Pokemon List */}
      <div className="grid grid-auto-fit gap-8">
        {searchPokemon.length > 1 ? (
          filterResults.map((poke) => {
            return (
              //Start Display Pokemon with search
              <div className="pt-4 md:pt-40 flex flex-wrap justify-center" key={poke.id} >
                <img className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-4 w-96 rounded-lg" src={poke.image} alt="pokemon" />
                <table className="h-96 w-96 sm:w-96 border-separate border border-slate-500 ...">
                  <thead>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=" w-96 text-gray-50 dark:bg-bluekemon text-center border border-slate-600 ...">Nom</td>
                      <td className="dark:bg-yellow-400 text-neutral-700 font-bold text-2xl h-20 text-center border border-slate-700 ...">{poke.name} N°{poke.pokedexId}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Type</td>
                      {poke.apiTypes.map((type, i) => {
                        return (
                          <td key={i} className="grid place-content-center justify-items-center border border-slate-500 border-slate-700 ...">{type.name}
                            <img className="w-10" src={type.image} alt="pokemon" />
                          </td>
                        )
                      }
                      )}
                    </tr>
                    <tr>
                      <td className="h-20 text-gray-50 dark:bg-bluekemon text-center border border-slate-600 ...">Stats</td>
                      <td className="grid grid-auto-fit border-t-2 border-x-2 border-slate-600 text-center ">{poke.stats.HP} points de vie</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center "> {poke.stats.attack} attaque</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center ">{poke.stats.defense} défense</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center ">{poke.stats.special_attack} spécial attaque</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center ">{poke.stats.special_defense} spécial défense</td>
                      <td className="grid grid-auto-fit border-b-2 border-x-2 border-slate-700 text-center ">{poke.stats.speed} vitesse</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              //End Display Pokemon with search 
            )
          })
        ) : (
          pokemon.map((poke) => {
            return (
              //Start Display Pokemon whithout search
              <div key={poke.id} className="pt-4 pr-2 pl-2 pb-2 dark:bg-grey-50 text-center text-4xl font-bold ">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block align-middle">
                  <div className="p-5">
                    <Link to={`/details-card/${poke.name}`}>
                      <img className="rounded-t-lg" src={poke.image} alt="" />
                    </Link>
                    <h5 className="mb-2 font-normal font-bold tracking-tight text-gray-900 underline dark:text-white">{poke.name}</h5>
                    <ul className="space-y-1 text-xs list-none list-inside text-gray-500 dark:text-gray-400">
                    </ul>
                  </div>
                </div>
              </div>
              //End Display Pokemon whithout search
            )
          })
        )}
      </div>
      {/* End Pokemon List */}
    </div>
  )
}