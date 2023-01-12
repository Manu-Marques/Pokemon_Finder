import { useParams } from "react-router-dom";

export default function DetailsCard({ pokemon }) {
  console.log(pokemon)
  const { id } = useParams();
  const poke = pokemon.filter((pokes) => pokes.name === id);

  return (
    <div className="pt-4 md:pt-40">
      {poke?.map((poke) => {
        return (
          <div class="flex flex-wrap justify-center" key={poke.id} >
              <img class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-4 w-96 rounded-lg" src={poke.image} alt="evoli" />
            <table class="h-96 w-96 sm:w-96 border-separate border border-slate-500 ...">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td class=" w-96 text-gray-50 dark:bg-bluekemon text-center border border-slate-600 ...">Nom</td>
                  <td class="dark:bg-yellow-400 text-neutral-700 font-bold text-2xl h-20 text-center border border-slate-700 ...">{poke.name} N°{poke.pokedexId}</td>
                </tr>
                <tr>
                  <td class="text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Type</td>
                  {poke.apiTypes.map((type, i) => {
                    return (
                      <td key={i} class="grid place-content-center justify-items-center border border-slate-500 border-slate-700 ...">{type.name}
                        <img class="w-10" src={type.image} />
                      </td>
                    )
                  }
                  )}
                </tr>
                  <td class="h-20 text-gray-50 dark:bg-bluekemon text-center border border-slate-600 ...">Stats</td>
                <tr class="grid grid-auto-fit border border-slate-700 ...">
                  <td class="text-center ">{poke.stats.HP} points de vie</td>
                  <td class="text-center "> {poke.stats.attack} attaque</td>
                  <td class="text-center ">{poke.stats.defense} défense</td>
                  <td class="text-center ">{poke.stats.special_attack} spécial attaque</td>
                  <td class="text-center ">{poke.stats.special_defense} spécial défense</td>
                  <td class="text-center ">{poke.stats.speed} vitesse</td>
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
