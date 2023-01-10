import { useParams } from "react-router-dom";

export default function DetailsCard({ pokemon }) {
  console.log(pokemon)
  const { id } = useParams();
  const poke = pokemon.filter((pokes) => pokes.name === id);

  return (
    <div className="pt-4 w-full h-full">
      {poke?.map((poke) => {
        console.log(poke);
        return (
          <div class="flex flex-wrap justify-center" key={poke.id} >
            <div class="">
              <img class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-4 w-96 rounded-lg" src={poke.image} alt="evoli" /></div>
            <table class="h-96 w-96 sm:w-96  border-separate border border-slate-500 ...">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td class="text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Nom</td>
                  <td class="h-20 text-center border border-slate-700 ...">{poke.name}</td>
                </tr>
                <tr>
                  <td class="h-1 text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Type</td>
                  {poke.apiTypes.map((type) => {
                    return (
                      <td className="items-center border border-slate-500 flex justify-center">
                      <td class="pr-2 border-slate-700 ...">{type.name}</td>
                    <img class="w-10" src={type.image}/>
                    </td>
                    )
                  }
                  )}
                </tr>
                <tr>
                  <td class="h-20 text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Stats</td>
                  <td class="text-center border border-slate-700 ...">{poke.stats.HP} Points de vie {poke.stats.attack} atta</td>
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
