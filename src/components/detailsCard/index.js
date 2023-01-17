import { useParams, Link } from "react-router-dom";

export default function DetailsCard({ pokemon }) {
  const { id } = useParams();
  const poke = pokemon.filter((pokes) => pokes.name === id);

  return (
    <div className="pt-4 md:pt-40">

      <Link className="bg-red-700 text-gray-50" to={-1}>Retour</Link>
      {poke?.map((poke) => {
        return (
          <div className="flex flex-wrap justify-center" key={poke.id} >
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
      }
    </div>
  )
}
