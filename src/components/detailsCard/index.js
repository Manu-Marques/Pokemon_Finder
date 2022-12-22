import { useParams } from "react-router-dom";

export default function DetailsCard({pokemon}) {

  const { id } = useParams();
  const poke = pokemon?.filter((poke) => poke.name === id);



  console.log(id);
    return (
      <div className="pt-4 flex flex-col items-center justify-center w-full h-full">
      {poke?.map((poke) => {
        return (
          <div key={poke.id}>
<img class="border-4 md:max-w-lg h-auto rounded-lg" src={poke.sprites.front_default}alt="evoli"/>
<table class="h-96 w-80 sm:w-96  border-separate border border-slate-500 ...">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td class="text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Nom</td>
      <td class="text-center border border-slate-700 ...">{poke.name}</td>
    </tr>
    <tr>
      <td class="text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Type</td>
      <td class="text-center border border-slate-700 ...">{poke.types.type.name}</td>
    </tr>
    <tr>
      <td class="text-gray-50 dark:bg-bluekemon text-center border border-slate-700 ...">Poids</td>
      <td class="text-center border border-slate-700 ...">60kg</td>
    </tr>
  </tbody>
</table>
</div>
      )
    })
    }
    </div>
    ) }
    