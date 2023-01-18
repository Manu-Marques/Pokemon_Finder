import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function PokemonList({ pokemon }) {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => { window.removeEventListener("load", handleLoading); };
  }, []);

  return !isLoading ? (
    <div>
      <form className="pt-2 flex justify-center ">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input value={inputValue} onChange={fusionFonction} id="search" className=" w-search p-4 pl-10 text-xl text-gray-900 border border-4 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-70 dark:border-red-700 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pikachu, Dracaufeu ..." required />
          <button onClick={resetInputField} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Effacer</button>
        </div>
      </form>
      <div className="grid grid-auto-fit gap-8">
        {searchPokemon.length > 1 ? (
          filterResults.map((poke) => {
            return (
              <div className="pt-4 md:pt-40 flex flex-wrap justify-center" key={poke.id} >
                <img className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-4 w-96 rounded-lg" src={poke.image} alt="evoli" />
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
                      <td className="grid grid-auto-fit border-t-2 border-x-2 border-slate-700 text-center ">{poke.stats.HP} points de vie</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center "> {poke.stats.attack} attaque</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center ">{poke.stats.defense} défense</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center ">{poke.stats.special_attack} spécial attaque</td>
                      <td className="grid grid-auto-fit border-x-2 border-slate-700 text-center ">{poke.stats.special_defense} spécial défense</td>
                      <td className="grid grid-auto-fit border-b-2 border-x-2 border-slate-700 text-center ">{poke.stats.speed} vitesse</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          })
        ) : (
          pokemon.map((poke) => {
            return (
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
            )
          })
        )}
      </div>
    </div>
  ) :
    ( <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
  )
}